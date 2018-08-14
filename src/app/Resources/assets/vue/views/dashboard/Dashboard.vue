<template>
    <div>
    <div id="cart" class="d-none d-sm-block">
        <span class="btn"><u class="fas fa-shopping-cart"></u></span>
        <i>5</i>
        <!-- /.cart_content -->
    </div>
    <aside id="dashboard_aside">
        <router-link to="/features" class="titre"><i class="fas fa-arrow-circle-left"></i>Choose other products</router-link>
        <div class="content">
            <b>Project Name</b>
            <b><span>5</span> features selected</b>
            <ul>
                <li><a href="#" title=""><i class="far fa-trash-alt"></i><b>Consult a portfolio</b>Fournir le pitch de vente adapté aux opportunités de marché et aux besoins des clients</a></li>
                <li><a href="#" title=""><i class="far fa-trash-alt"></i><b>Investment report</b>Fournir le pitch de vente adapté aux opportunités de marché et aux besoins des clients</a></li>
                <li><a href="#" title=""><i class="far fa-trash-alt"></i><b>Client Questionnary</b>Fournir le pitch de vente adapté aux opportunités de marché et aux besoins des clients</a></li>
                <li><a href="#" title=""><i class="far fa-trash-alt"></i><b>Trading alert</b>Fournir le pitch de vente adapté aux opportunités de marché et aux besoins des clients</a></li>
                <li><a href="#" title=""><i class="far fa-trash-alt"></i><b>Comparison</b>Fournir le pitch de vente adapté aux opportunités de marché et aux besoins des clients</a></li>
            </ul>
        </div>
        <!-- /.content -->
    </aside>
    <!-- /#dashboard -->
    <section id="dashboard">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <h2>Make it yours</h2>
                    <p>Customize your dashboard with your brand name, colors and logo.<br />Then browse it and explore the functionalities of your features</p>
                    <h2>Dashboard Customization</h2>
                    <form>
                        <label>Name</label>
                        <input type="text" placeholder="Defaut" class="input_text">
                        <label>Import a logo</label>
                        <input type="file">
                        <div class="row">
                            <div class="col-sm-6">
                                <label>Main color</label>
                                <div class="colorpicker-content">
                                    <span></span>
                                    <input type="text" class="colorpicker input_text" value="#586987"/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <label>Text color</label>
                                <div class="colorpicker-content">
                                    <span></span>
                                    <input type="text" class="colorpicker input_text" value="#123569"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="text-center">
                        <a href="#" title="" class="more">Dashboad preview</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.container -->
    </section>
    <!-- /#dashboard -->
    </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>

</style>