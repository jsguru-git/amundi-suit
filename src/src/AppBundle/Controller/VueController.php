<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class IndexController
 * @package AppBundle\Controller
 * @Security("has_role('ROLE_USER')")
 */
final class VueController extends Controller
{
    /**
     * @Route("/{vueRouting}", name="index", requirements={"vueRouting"="^(?!api).+"}, defaults={"vueRouting": null})
     * @param string $vueRouting
     * @return Response
     */
    public function indexAction($vueRouting)
    {
        return $this->render('vue.html.twig', [
            'vueRouting' => \is_null($vueRouting) ? '/' : '/' . $vueRouting,
        ]);
    }
}
