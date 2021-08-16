const $menu = document.getElementById('menu')
const $menuIcon = document.getElementById('menu_icon')

$menuIcon.addEventListener('click',()=> {
    $menu.classList.toggle('menu--show')
    if($menuIcon.classList.contains('fa-bars')){
        $menuIcon.classList.replace('fa-bars','fa-times')
    }else {
        $menuIcon.classList.replace('fa-times','fa-bars')
    }
    // $menuIcon.classList.toggle('fa-times')
})