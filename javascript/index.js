// 立即执行函数，避免全局变量污染
(function () {
    "use strict";  // 使用严格模式，提升代码安全性

    // ==================== 下拉菜单交互 ====================
    // 获取下拉菜单按钮、菜单内容及其父容器
    const dropdownBtn = document.querySelector('#aboutDropdown .dropbtn');
    const dropdownContent = document.getElementById('dropdownMenu');
    const parentLi = document.querySelector('#aboutDropdown');

    // 点击按钮：切换菜单显示/隐藏
    dropdownBtn.addEventListener('click', function (e) {
        e.preventDefault();  // 阻止a标签默认跳转行为
        const isVisible = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });

    // 鼠标离开父容器时自动隐藏菜单（恢复默认样式）
    parentLi.addEventListener('mouseleave', function () {
        dropdownContent.style.display = '';
    });

    // 点击页面任意其他位置时关闭菜单
    document.addEventListener('click', function (e) {
        if (!parentLi.contains(e.target)) {  // 点击目标不在菜单区域内
            dropdownContent.style.display = 'none';
        }
    });

    // ==================== 导航栏高亮当前页面 ====================
    // 获取当前页面的文件名（如 index.html、kunqu.html）
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // 遍历所有导航链接，匹配当前页面则添加 active 类
    const allLinks = document.querySelectorAll('.nav-list a');
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        // 匹配普通页面
        if (href === currentPath || (currentPath === 'index.html' && href === 'index.html') || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
        // 单独处理小组介绍页面（因在下拉菜单中）
        if (currentPath === 'team.html' && href === 'team.html') {
            link.classList.add('active');
        }
    });
})();
