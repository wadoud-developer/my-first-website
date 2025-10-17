// دورة للتحية عند النقر على الزر
document.getElementById('clickButton').addEventListener('click', function() {
    const messages = [
        "مرحباً! 🎉 شكراً لزيارتك موقعي",
        "أهلاً وسهلاً! 🌟 أنا عبد الودود",
        "يسعدني تواصلك! 💻 تابع تقدمي",
        "معاً نحو التميز في البرمجة! 🚀",
        "هذا أول موقع لي وسأطور المزيد! ✨"
    ];
    
    // اختيار رسالة عشوائية
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // عرض الرسالة
    document.getElementById('message').textContent = randomMessage;
    
    // تأثير صوتي بسيط (سيظهر في console)
    console.log("🎵 تم النقر على الزر!");
});

// تأثيرات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 موقع عبد الودود يعمل بنجاح!");
    
    // إضافة تأثيرات للعناصر
    const elements = document.querySelectorAll('section, header, footer');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
    });
    
    // تأثير ظهور تدريجي
    setTimeout(() => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// تغيير لون الخلفية عند تمرير الماوس
document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.body.style.background = `
        linear-gradient(135deg, 
            hsl(${x * 360}, 70%, 60%) 0%, 
            hsl(${y * 360}, 70%, 50%) 100%
        )
    `;
});

// عدّاد لعدد النقرات
let clickCount = 0;
document.getElementById('clickButton').addEventListener('click', function() {
    clickCount++;
    console.log(`عدد النقرات: ${clickCount}`);
    
    // تغيير لون الزر بعد 5 نقرات
    if (clickCount >= 5) {
        this.style.background = '#4CAF50';
        this.textContent = 'أحسنت! 🎯 استمر في النقر';
    }
});

// عرض وقت تحميل الصفحة
window.onload = function() {
    const loadTime = performance.now().toFixed(2);
    console.log(`⏱️ وقت تحميل الصفحة: ${loadTime} مللي ثانية`);
};
