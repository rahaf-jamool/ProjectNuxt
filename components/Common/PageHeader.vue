<template>
<header class="main-header">

        <div class="logo">
            <a href=""><img src="../../public/assets/icon/logo-header.png" alt=""></a>
        </div>

        <input type="checkbox" class="menu-btn" id="menu-btn">
        <label for="menu-btn" class="menu-icon">
            <span class="menu-icon_line"></span>
        </label>

        <ul class="nav-links">
            <li class="nav-link"><a class="active" href="#">Home</a></li>
            <li class="nav-link"><a href="#">Contact Us</a></li>
            <li class="nav-link"><a href="#">Mechainics</a></li>
            <li class="nav-link"><a href="#">Spare Parts</a></li>
            <li class="nav-link"><a href="#">News</a></li>
            <li class="nav-link"><a href="#">About us</a></li>
        </ul>
        <div class="contact">
            <div class="phone"><img src="../../public/assets/icon/whats.png"/> +9710000000</div>
            <div class="search"><img src="../../public/assets/icon/search.png"/></div>
            <div class="lang">
                <img src="../../public/assets/icon/Asset 3ldpi.png" alt="">
            </div>
        </div>

    </header>
</template>

<script>

export default {
    name: "PageHeader",
};
</script>
