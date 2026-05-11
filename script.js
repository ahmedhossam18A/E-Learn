// بيانات الكورسات الأصلية
const courses = [
    { title: "كورس JavaScript", category: "programming", price: "1500 EGP", img: "Javascript Photo.jpg" },
    { title: "كورس UI/UX", category: "design", price: "800 EGP", img: "UI UX Photo2.jpg" },
    { title: "كورس C++", category: "programming", price: "1500 EGP", img: "C++ Photo2.jpg" }
];

// دالة عرض الكورسات (تعمل في صفحة courses.html أو index.html)
function displayCourses(list) {
    const container = document.getElementById('coursesContainer');
    if (!container) return; 
    container.innerHTML = "";
    list.forEach((c, i) => {
        container.innerHTML += `
            <div class="card" style="animation-delay: ${i*0.1}s">
                <img src="${c.img}">
                <h3>${c.title}</h3>
                <p>${c.price}</p>
                <button class="btn-main" onclick="alert('تم التسجيل!')">اشترك</button>
            </div>`;
    });
}

// دالة تصفية الكورسات
function filterCourses(cat) {
    const filtered = cat === 'all' ? courses : courses.filter(c => c.category === cat);
    displayCourses(filtered);
}

// تشغيل عرض الكورسات عند تحميل الصفحة
window.addEventListener('load', () => {
    displayCourses(courses);
});

// تصغير الهيدر عند السكرول (Header Scroll Effect)
window.onscroll = () => {
    const nav = document.querySelector('header');
    if (nav) {
        window.scrollY > 50 ? nav.style.padding = "10px 10%" : nav.style.padding = "20px 10%";
    }
};

/* ========================================= */
/* كود نظام تسجيل الدخول (Login System)     */
/* ========================================= */
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        if(user === "admin" && pass === "892007") {
            // تشغيل القصاصات الملونة (Confetti)
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#6c5ce7', '#0984e3', '#fab1a0']
                });
            }

            // رسالة الترحيب
            const welcomeMsg = document.createElement('div');
            welcomeMsg.innerHTML = "<h1 style='font-size:3rem; text-shadow: 2px 2px 20px rgba(0,0,0,0.5);'>Welcome to E-Learn! 🚀</h1>";
            welcomeMsg.style.cssText = "position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); color:white; z-index:9999; font-family:Cairo; text-align:center; animation: fadeInDown 0.5s;";
            document.body.appendChild(welcomeMsg);

            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            const errorElement = document.getElementById('error');
            if (errorElement) {
                errorElement.innerText = "Check your username and password";
                errorElement.style.display = "block";
            }
        }
    });
}

/* ========================================= */
/* كود فورم التواصل الجديد (Contact Form)   */
/* ========================================= */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // منع إعادة تحميل الصفحة

        // الحصول على القيم من المدخلات
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // محاكاة إرسال البيانات (يمكنك ربطها بـ API لاحقاً)
        console.log("Form Submitted:", { name, email, message });

        // إظهار رسالة نجاح للمستخدم
        alert(`شكراً لك يا ${name}! تم استلام رسالتك بنجاح وسنتواصل معك قريباً. ✨`);
        
        // مسح الحقول بعد الإرسال
        contactForm.reset();
    });
}
