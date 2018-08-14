<template>
    <div id="app">
        <header id="header">
            <div class="container">
                <router-link to="/" id="logo">
                    <img src="../img/logo.png" alt="">
                </router-link>
                <span id="burger" class="d-lg-none"><i class="fas fa-bars"></i></span>
                <nav id="main_nav">
                    <ul>
                        <router-link to="/platform" tag="li" active-class="current">
                            <a><span>Platforms</span></a>
                            <ul class="sub-menu">
                                <li><router-link to="/advisory-platform">advisory platform</router-link></li>
                                <li><router-link to="/academy-platform" title="">academy platform</router-link></li>
                                <li><router-link to="/information-platform" title="">information platform</router-link></li>
                            </ul>
                        </router-link>
                        <router-link to="/features" tag="li" active-class="current">
                            <a><span>Features</span></a>
                        </router-link>
                        <li><a href="/dashboard" title="">Dashboard</a></li>
                        <li>
                            <a href="#" title=""><i class="fas fa-user-circle"></i></a>
                            <ul class="sub-menu-bis">
                                <li><a href="/myAccount" title="">My account</a></li>
                                <li><a href="#" title="">Change password</a></li>
                                <li><a href="#" title="">Alerts</a></li>
                                <li><a href="/logout" title="">Log out</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <router-view></router-view>

        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-lg-2">
                        <router-link to="/" id="logo_footer">
                            <img src="../img/logo.png" alt="">
                        </router-link>
                    </div>
                    <div class="col-md-9 col-lg-10">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assu</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import axios from 'axios';
    import router from './router/index';

    export default {
        name: 'app',
        created () {
            axios.interceptors.response.use(undefined, (err) => {
                return new Promise(function (resolve, reject) {
                    if (err.response.status === 401) {
                        window.location = '/';
                    }
                    throw err;
                });
            });
        },
        beforeMount () {
            let vueRouting = this.$parent.$el.attributes['data-vue-routing'].value;
            router.push({path: vueRouting});
        },
        mounted () {
            window.themeSetup();
        },
        updated () {
            window.themeSetup();
        },
    }
</script>