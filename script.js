// 获取页面元素
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

// 点击“愿意”按钮的效果
yesBtn.addEventListener('click', () => {
    response.textContent = '太好了！以后你就是我儿子啦~ 🎉';
    // 随机改变背景色（增加趣味性）
    const colors = ['#e3f2fd', '#e8f5e9', '#fff8e1', '#fce4ec'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// 点击“不愿意”按钮的效果（增加调皮互动：按钮会跑）
noBtn.addEventListener('mouseover', () => {
    // 随机生成位置（在屏幕内）
    const maxX = window.innerWidth - 150; // 按钮宽度约150px
    const maxY = window.innerHeight - 60; // 按钮高度约60px
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // 移动按钮
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

noBtn.addEventListener('click', () => {
    response.textContent = '呜呜呜...再考虑一下嘛~ 🥺';
});