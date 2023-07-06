<template>
    <nav>
        <section class="simbol">
            <router-link class="lucas" to="/homePage"> 
                <i class="fa-regular fa-l"></i>
            </router-link>
        </section>
        <h1>
            Web Developer
        </h1>
        <section class="menu">
            <aside>
                <ul>
                    <li>
                        <!-- <a href="#" class="links"> About</a> -->
                        <router-link class="links" to="/about"> <i class="fa-regular fa-address-card"></i> About</router-link>
                    </li>
                    <!-- <li>
                        <a href="#" class="links"> <i class="fa-regular fa-address-book"></i> Contact</a>
                    </li> -->
                    <li>
                        <router-link class="links" to="/projects"> <i class="fa-solid fa-laptop-file"></i> Projects</router-link>
                    </li>
                </ul>
            </aside>
            <article>
                <router-link to="/resume" class="resume-link"> Resume</router-link>
            </article>
            <details>
                <summary class="fa-solid fa-bars"></summary>
                <ul>
                    <li>
                        <a href="#" >About Me</a>
                    </li>
                    <li>
                        <a href="#">Contact Me</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                </ul>
            </details>
        </section>
    </nav>
</template>

<script>
    export default {
        name: "NavMenu"
    }
</script>