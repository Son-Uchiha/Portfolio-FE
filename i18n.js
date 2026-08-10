const translations = {
  vi: {
    // Navigation
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",
    
    // Hero
    "hero.badge": "Sẵn sàng cho cơ hội thực tập",
    "hero.hello": "Xin chào, tôi là Nguyễn Duy Sơn<br />",
    "hero.desc": "Sinh viên CNTT tại <strong>PTIT</strong>, định hướng phát triển Backend với <span class=\"highlight\">Node.js/NestJS</span>. Từng thực chiến xây dựng kiến trúc <span class=\"highlight\">E-Commerce production-ready</span>, xử lý hàng đợi và tích hợp thanh toán.",
    "hero.btn.projects": "Xem dự án",
    "hero.btn.cv": "Tải CV",
    "hero.btn.contact": "Liên hệ",
    "hero.scroll": "Cuộn xuống",
    
    // About
    "about.tag": "[ 01 ] 概要 — Giới thiệu",
    "about.title": "Về tôi",
    "about.p1": "Sinh viên CNTT tại <strong>PTIT</strong>, định hướng phát triển Backend với <strong>Node.js/NestJS</strong>. Từng thực chiến xây dựng kiến trúc E-Commerce production-ready, xử lý hàng đợi và tích hợp thanh toán.",
    "about.p2": "Mục tiêu: gia nhập môi trường chuyên nghiệp để rèn luyện tư duy thiết kế hệ thống phân tán và tối ưu mã nguồn. Hiện đang chủ động mở rộng kiến thức về các Message Broker nâng cao như RabbitMQ, Kafka.",
    "about.edu": "Học vấn & Đào tạo",
    "about.location": "Vị trí",
    "about.goal": "Mục tiêu",
    "about.hanoi": "Hà Nội, Việt Nam",
    
    // Skills
    "skills.tag": "[ 02 ] 技術 — Kỹ năng",
    "skills.title": "Kỹ năng kỹ thuật",
    "skills.lang": "Ngôn ngữ & Framework",
    "skills.db": "Cơ sở dữ liệu & ORM",
    "skills.mq": "Caching & Queue",
    "skills.auth": "Bảo mật & Xác thực",
    "skills.tools": "Tích hợp & Công cụ",
    "skills.ai": "AI Coding",
    "skills.deep": "Kiến thức chuyên sâu",
    
    // Experience
    "exp.tag": "[ 03 ] 経験 — Hành trình",
    "exp.title": "Kinh nghiệm & Học vấn",
    "exp.edu_badge": "Học vấn",
    "exp.project_badge": "Dự án cá nhân",
    "exp.soft_badge": "Kỹ năng mềm & Tư duy hệ thống",
    "exp.uni_title": "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
    "exp.uni_role": "Môn học chuyên ngành tiêu biểu: Cơ sở dữ liệu, OOP, Cấu trúc dữ liệu & Giải thuật, Mạng máy tính.",
    "exp.uni_1": "Đã chuyển hướng sang chương trình đào tạo thực hành chuyên sâu và lộ trình bằng cấp quốc tế.",
    "exp.rikkei_badge": "Đào tạo & Thực tập",
    "exp.rikkei_date": "2026 – 2027 (đang học)",
    "exp.rikkei_1": "Chương trình đào tạo: Fullstack JavaScript Developer.",
    "exp.rikkei_2": "Thực tập (OJT): Tham gia phát triển tính năng Backend và xây dựng API theo yêu cầu nghiệp vụ; áp dụng quy trình Agile/Scrum và Git Flow; thực hiện kiểm thử, debugging và bảo trì hệ thống.",
    "exp.fpt_badge": "Kế hoạch tương lai",
    "exp.fpt_1": "<strong>FPT Jetking (2027 – 2029):</strong> Higher Diploma in AI Agent & Software Engineering. Định hướng phát triển hệ thống AI Agent, ứng dụng LLM, RAG.",
    "exp.fpt_2": "<strong>Lincoln University College (2030 – 2031):</strong> Chương trình Cử nhân chuyển tiếp quốc tế từ FPT Jetking.",
    "exp.proj_desc": "Xây dựng hệ thống phân quyền RBAC 3 tầng. Checkout Engine với Interactive Transaction & Atomic Decrement. Quản lý trạng thái bằng State Machine.",
    "exp.soft_title": "Tự học & Tư duy hệ thống",
    "exp.soft_1": "Tự chủ nghiên cứu chuyên sâu toàn bộ kiến thức nâng cao (NestJS, BullMQ, Redis, Prisma, VNPay) qua tài liệu tiếng Anh chính thống",
    "exp.soft_2": "Đọc hiểu tài liệu kỹ thuật tiếng Anh — NestJS, Prisma, BullMQ, Redis",
    "exp.soft_3": "Tư duy phân tích và giải quyết vấn đề (thiết kế Idempotent, Interactive Transaction, Worker tách biệt)",
    "exp.soft_4": "Hiện đang chủ động mở rộng kiến thức về RabbitMQ, Kafka",
    
    // Projects
    "proj.tag": "[ 04 ] 開発 — Dự án",
    "proj.title": "Dự án nổi bật",
    "proj.subtitle": "Hệ thống Backend E-Commerce hoàn chỉnh, thiết kế theo kiến trúc production-ready",
    "proj.link_text": "Link dự án tại đây",
    "proj.f1.title": "Authentication & Authorization",
    "proj.f1.1": "<strong>Stateless JWT Auth</strong> kết hợp <strong>Redis Blacklist</strong> — thu hồi token tức thì thay vì lưu session trong DB",
    "proj.f1.2": "<strong>Token Rotation</strong> cho Refresh Token — chống Replay Attack",
    "proj.f1.3": "Phân quyền <strong>RBAC</strong> hoàn chỉnh với <strong>3 tầng Guard</strong> bảo mật: Auth → Permissions → SuperAdmin",
    "proj.f2.title": "Checkout Engine & Thanh toán",
    "proj.f2.1": "Lõi checkout trong <strong>Interactive Transaction</strong> kết hợp <strong>Atomic Decrement (Row-Level X-Lock)</strong> — đảm bảo nhất quán dữ liệu",
    "proj.f2.2": "Tích hợp cổng <strong>VNPay</strong>: Return URL + IPN Webhook, kiến trúc <strong>Idempotent</strong> ngăn trùng lặp giao dịch",
    "proj.f2.3": "Sử dụng <strong>Prisma.Decimal</strong> triệt tiêu hoàn toàn sai số floating-point",
    "proj.f3.title": "Kiến trúc Worker & Message Queue",
    "proj.f3.1": "<strong>BullMQ</strong> (backed by Redis) — xử lý tác vụ bất đồng bộ, giải phóng API không bị block",
    "proj.f3.2": "Tách biệt hoàn toàn API Server và Worker Process qua <strong>NestFactory.createApplicationContext()</strong> — scale ngang linh hoạt",
    "proj.f3.3": "Worker crash không ảnh hưởng API Server — <strong>Fault Isolation</strong>",
    "proj.f4.title": "Quản lý nâng cao & Hiệu suất",
    "proj.f4.1": "<strong>2 Queue riêng biệt</strong>: mail_queue (gửi email/OTP qua SMTP) + order_queue (Delayed Job tự hủy đơn sau 15 phút)",
    "proj.f4.2": "Giỏ hàng với <strong>Upsert + Atomic Increment</strong> — chống Lost Update",
    "proj.f4.3": "Quản lý vòng đời đơn hàng qua <strong>State Machine</strong>: PENDING → CONFIRMED → SHIPPING → DELIVERED / CANCELLED",
    "proj.f4.4": "Triển khai <strong>Redis Cache</strong> cho các API truy xuất sản phẩm — giảm tải Database và tối ưu Latency",
    "proj.arch": "Kiến trúc hệ thống",
    
    // Contact & Footer
    "contact.tag": "[ 05 ] 連絡先 — Liên hệ",
    "contact.title": "Kết nối với tôi",
    "contact.desc": "Tôi luôn sẵn sàng cho cơ hội thực tập và các dự án mới. Hãy liên hệ nếu bạn muốn trao đổi thêm!",
    "contact.phone": "Điện thoại",
    "contact.profile": "Xem Profile",
    "footer.desc": "Thiết kế & Phát triển bởi <strong>Backend Developer</strong> · 2026",
    
    // Chatbot
    "chatbot.greeting": "Xin chào! Tôi là trợ lý ảo trên Portfolio của Nguyễn Duy Sơn - Backend Developer (Intern). Bạn muốn tìm hiểu thêm về kỹ năng, dự án hay thông tin liên hệ của Sơn? Hãy cho tôi biết nếu bạn cần hỗ trợ nhé!"
  },
  
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    "hero.badge": "Ready for internship opportunities",
    "hero.hello": "Hello, I am Nguyễn Duy Sơn<br />",
    "hero.desc": "IT student at <strong>PTIT</strong>, oriented towards Backend development with <span class=\"highlight\">Node.js/NestJS</span>. Built a <span class=\"highlight\">production-ready E-Commerce</span> architecture with queue processing and payment integration.",
    "hero.btn.projects": "View Projects",
    "hero.btn.cv": "Download CV",
    "hero.btn.contact": "Contact",
    "hero.scroll": "Scroll down",
    
    // About
    "about.tag": "[ 01 ] 概要 — About Me",
    "about.title": "About Me",
    "about.p1": "IT student at <strong>PTIT</strong>, oriented towards Backend development with <strong>Node.js/NestJS</strong>. Built a production-ready E-Commerce architecture with queue processing and payment integration.",
    "about.p2": "Goal: Join a professional environment to sharpen distributed system design thinking and optimize source code. Currently expanding knowledge on advanced Message Brokers like RabbitMQ, Kafka.",
    "about.edu": "Education & Training",
    "about.location": "Location",
    "about.goal": "Objective",
    "about.hanoi": "Hanoi, Vietnam",
    
    // Skills
    "skills.tag": "[ 02 ] 技術 — Skills",
    "skills.title": "Technical Skills",
    "skills.lang": "Languages & Frameworks",
    "skills.db": "Database & ORM",
    "skills.mq": "Caching & Queue",
    "skills.auth": "Security & Auth",
    "skills.tools": "Integration & Tools",
    "skills.ai": "AI Coding",
    "skills.deep": "In-depth Knowledge",
    
    // Experience
    "exp.tag": "[ 03 ] 経験 — Journey",
    "exp.title": "Experience & Education",
    "exp.edu_badge": "Education",
    "exp.project_badge": "Personal Project",
    "exp.soft_badge": "Soft Skills & System Thinking",
    "exp.uni_title": "Posts and Telecommunications Institute of Technology",
    "exp.uni_role": "Key subjects: Databases, OOP, Data Structures & Algorithms, Computer Networks.",
    "exp.uni_1": "Transitioned to intensive practical training and international degree pathway.",
    "exp.rikkei_badge": "Training & Internship",
    "exp.rikkei_date": "2026 – 2027 (ongoing)",
    "exp.rikkei_1": "Training Program: Fullstack JavaScript Developer.",
    "exp.rikkei_2": "Internship (OJT): Participated in developing Backend features and building APIs according to business requirements; applied Agile/Scrum and Git Flow processes; performed testing, debugging and system maintenance.",
    "exp.fpt_badge": "Future Plans",
    "exp.fpt_1": "<strong>FPT Jetking (2027 – 2029):</strong> Higher Diploma in AI Agent & Software Engineering. Oriented towards AI Agent systems, LLM applications, RAG.",
    "exp.fpt_2": "<strong>Lincoln University College (2030 – 2031):</strong> International transfer Bachelor program from FPT Jetking.",
    "exp.proj_desc": "Built a 3-layer RBAC authorization system. Checkout Engine with Interactive Transaction & Atomic Decrement. Order lifecycle management using State Machine.",
    "exp.soft_title": "Self-learning & System Thinking",
    "exp.soft_1": "Self-studied all advanced knowledge (NestJS, BullMQ, Redis, Prisma, VNPay) through official English documentation",
    "exp.soft_2": "Reading English technical documentation — NestJS, Prisma, BullMQ, Redis",
    "exp.soft_3": "Analytical thinking and problem solving (Idempotent design, Interactive Transaction, Isolated Worker)",
    "exp.soft_4": "Currently expanding knowledge on RabbitMQ, Kafka",
    
    // Projects
    "proj.tag": "[ 04 ] 開発 — Projects",
    "proj.title": "Featured Projects",
    "proj.subtitle": "A complete E-Commerce Backend system, designed with a production-ready architecture",
    "proj.link_text": "Project link here",
    "proj.f1.title": "Authentication & Authorization",
    "proj.f1.1": "<strong>Stateless JWT Auth</strong> with <strong>Redis Blacklist</strong> — instant token revocation instead of DB session storage",
    "proj.f1.2": "<strong>Token Rotation</strong> for Refresh Token — prevent Replay Attacks",
    "proj.f1.3": "Complete <strong>RBAC</strong> with <strong>3 Guard layers</strong>: Auth → Permissions → SuperAdmin",
    "proj.f2.title": "Checkout Engine & Payment",
    "proj.f2.1": "Checkout core in <strong>Interactive Transaction</strong> with <strong>Atomic Decrement (Row-Level X-Lock)</strong> — ensures data consistency",
    "proj.f2.2": "Integrate <strong>VNPay</strong> gateway: Return URL + IPN Webhook, <strong>Idempotent</strong> architecture preventing duplicate transactions",
    "proj.f2.3": "Use <strong>Prisma.Decimal</strong> to completely eliminate floating-point inaccuracies",
    "proj.f3.title": "Worker Architecture & Message Queue",
    "proj.f3.1": "<strong>BullMQ</strong> (backed by Redis) — async task processing, non-blocking API",
    "proj.f3.2": "Completely separated API Server and Worker Process via <strong>NestFactory.createApplicationContext()</strong> — flexible horizontal scaling",
    "proj.f3.3": "Worker crash does not affect API Server — <strong>Fault Isolation</strong>",
    "proj.f4.title": "Advanced Management & Performance",
    "proj.f4.1": "<strong>2 separate Queues</strong>: mail_queue (send email/OTP via SMTP) + order_queue (Delayed Job auto-cancel after 15 min)",
    "proj.f4.2": "Cart with <strong>Upsert + Atomic Increment</strong> — prevent Lost Update",
    "proj.f4.3": "Order lifecycle management via <strong>State Machine</strong>: PENDING → CONFIRMED → SHIPPING → DELIVERED / CANCELLED",
    "proj.f4.4": "Implemented <strong>Redis Cache</strong> for product retrieval APIs — reducing Database load and optimizing Latency",
    "proj.arch": "System Architecture",
    
    // Contact & Footer
    "contact.tag": "[ 05 ] 連絡先 — Contact",
    "contact.title": "Connect with me",
    "contact.desc": "I am always open to internship opportunities and new projects. Feel free to contact me to discuss further!",
    "contact.phone": "Phone",
    "contact.profile": "View Profile",
    "footer.desc": "Designed & Developed by <strong>Backend Developer</strong> · 2026",
    
    // Chatbot
    "chatbot.greeting": "Hello! I am the virtual assistant on Nguyễn Duy Sơn's Portfolio - Backend Developer (Intern). Would you like to learn more about Sơn's skills, projects, or contact information? Let me know if you need any assistance!"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) return;
  
  // Save to localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Use innerHTML because some translations contain HTML tags (like <strong>, <span>)
      el.innerHTML = translations[lang][key];
    }
  });

  // Update active state of language toggle button if it exists
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'vi' ? 'VI' : 'EN';
  }
}

// Initialize language on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(savedLang);
});
