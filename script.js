/* ============================================
   Portfolio Script — Hiệu ứng & Tương tác
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Khởi tạo Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  /* ----- 1. Scroll Animation (Intersection Observer) ----- */
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hỗ trợ delay tuỳ chỉnh qua data-delay
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('visible'), Number(delay));
          observer.unobserve(entry.target); // Chỉ chạy 1 lần
        }
      });
    },
    { threshold: 0.15 }
  );
  animatedEls.forEach((el) => observer.observe(el));

  /* ----- 2. Navbar: đổi style khi cuộn ----- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- 3. Active nav-link theo section đang xem ----- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ----- 4. Mobile menu toggle ----- */
  const navToggle = document.getElementById('navToggle');
  const navLinksMenu = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksMenu.classList.toggle('active');
  });

  // Đóng menu khi click vào link
  navLinksMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinksMenu.classList.remove('active');
    });
  });

  /* ----- 5. Ẩn scroll indicator khi cuộn ----- */
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
    }, { passive: true });
  }
  /* ----- 6. Theme Toggle (Dracula) ----- */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const currentTheme = localStorage.getItem('theme') || 'dracula';
  
  // Áp dụng theme lưu trong localStorage
  if (currentTheme === 'dracula') {
    document.body.classList.add('theme-dracula');
    if (window.lucide && themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i data-lucide="sun"></i>';
      lucide.createIcons();
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('theme-dracula');
      let theme = 'default';
      
      if (document.body.classList.contains('theme-dracula')) {
        theme = 'dracula';
        themeToggleBtn.innerHTML = '<i data-lucide="sun"></i>';
      } else {
        themeToggleBtn.innerHTML = '<i data-lucide="moon"></i>';
      }
      
      localStorage.setItem('theme', theme);
      if (window.lucide) {
        lucide.createIcons(); // Re-render icon
      }
    });
  }

  /* ----- 7. Language Toggle ----- */
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      // setLanguage được định nghĩa trong i18n.js
      if (typeof setLanguage === 'function') {
        const currentLang = localStorage.getItem('preferredLanguage') || 'vi';
        const newLang = currentLang === 'vi' ? 'en' : 'vi';
        setLanguage(newLang);
      }
    });
  }

  /* ===== CHATBOT LOGIC ===== */
  // API URL giờ đây trỏ về Backend nội bộ của chúng ta thay vì gọi trực tiếp Google
  const API_URL = 'http://localhost:3000/api/chat';

  const toggleBtn = document.getElementById('chatbotToggleBtn');
  const closeBtn = document.getElementById('chatbotCloseBtn');
  const chatWindow = document.getElementById('chatbotWindow');
  const chatInput = document.getElementById('chatbotInput');
  const sendBtn = document.getElementById('chatbotSendBtn');
  const messagesContainer = document.getElementById('chatbotMessages');

  // Hướng dẫn cho AI để trả lời đúng bối cảnh Portfolio
  const SYSTEM_INSTRUCTION = `Bạn là trợ lý ảo AI trên Portfolio của Nguyễn Duy Sơn - một Backend Developer (Intern).
  Nhiệm vụ của bạn là trả lời thân thiện, chuyên nghiệp về các thông tin của Sơn.
  Thông tin của Sơn:
  - Học vấn: Đại học PTIT (2023-2026), Rikkei Academy (2026-2027, Fullstack), FPT Jetking (2027-2029, AI Agent & SE), Lincoln University (2030-2031).
  - Kỹ năng chính: NestJS, TypeScript, ReactJS, Redis, BullMQ, Prisma, MySQL.
  - Dự án nổi bật: NestJS E-Commerce Backend (có JWT, RBAC, Redis, Worker, VNPay, Interactive Transaction, Atomic Decrement, State Machine).
  - Mục tiêu: Thực tập Backend Developer.
  - Liên hệ: SĐT: 0949543969, Email: uchihason5@gmail.com.
  Hãy trả lời ngắn gọn, súc tích (dưới 4 câu) và bằng tiếng Việt.`;

  if (toggleBtn && chatWindow) {
    // Đóng chatbot mặc định trên mobile (ví dụ màn hình dưới 768px)
    if (window.innerWidth <= 768) {
      chatWindow.classList.add('hidden');
    }

    let lastScrollY = window.scrollY;

    // Mở/đóng chat
    toggleBtn.addEventListener('click', () => {
      chatWindow.classList.remove('hidden');
      lastScrollY = window.scrollY; // Reset anchor
    });

    closeBtn.addEventListener('click', () => {
      chatWindow.classList.add('hidden');
    });

    // Gửi tin nhắn khi nhấn nút hoặc Enter
    sendBtn.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSendMessage();
    });

    // Đóng chatbot khi người dùng cuộn trang
    window.addEventListener('scroll', () => {
      if (Math.abs(window.scrollY - lastScrollY) > 150) {
        if (!chatWindow.classList.contains('hidden')) {
          chatWindow.classList.add('hidden');
        }
        lastScrollY = window.scrollY;
      }
    }, { passive: true });
  }

  async function handleSendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // 1. Hiển thị tin nhắn người dùng
    appendMessage(text, 'user');
    chatInput.value = '';
    sendBtn.disabled = true;

    // 2. Hiển thị Loading (Typing indicator)
    const typingId = showTypingIndicator();

    try {
      // 3. Gọi Gemini API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: text }] }],
          systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] }
        })
      });

      const data = await response.json();
      removeTypingIndicator(typingId);
      
      console.log("Gemini API Response:", data);

      if (!response.ok) {
        if (response.status === 401) {
          appendMessage("Xin lỗi, hệ thống AI của Google hiện đang bảo trì định dạng API Key nên tạm thời không thể trả lời. Bạn vui lòng xem thông tin chi tiết của tôi ở các mục bên trên hoặc liên hệ trực tiếp qua Email nhé!", 'bot');
        } else {
          const errorMsg = data.error && data.error.message ? data.error.message : response.statusText;
          appendMessage(`Lỗi API (${response.status}): ${errorMsg}`, 'bot');
        }
        return;
      }

      // 4. Hiển thị kết quả từ AI
      if (data.candidates && data.candidates.length > 0) {
        const botReply = data.candidates[0].content.parts[0].text;
        appendMessage(botReply, 'bot');
      } else {
        appendMessage("Xin lỗi, API không trả về kết quả hợp lệ. Vui lòng xem Console (F12) để biết chi tiết.", 'bot');
      }

    } catch (error) {
      console.error("Chatbot Error:", error);
      removeTypingIndicator(typingId);
      appendMessage("Không thể kết nối đến máy chủ AI. Bạn hãy thử lại sau nhé.", 'bot');
    } finally {
      sendBtn.disabled = false;
      chatInput.focus();
    }
  }

  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    
    // Nếu text có line break thì thay bằng <br>
    msgDiv.innerHTML = text.replace(/\n/g, '<br>');
    
    messagesContainer.appendChild(msgDiv);
    scrollToBottom();
    
    // Render icon
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function showTypingIndicator() {
    const id = 'typing-' + Date.now();
    const msgDiv = document.createElement('div');
    msgDiv.id = id;
    msgDiv.classList.add('message', 'bot-message', 'typing-indicator');
    msgDiv.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    messagesContainer.appendChild(msgDiv);
    scrollToBottom();
    return id;
  }

  function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) {
      el.remove();
    }
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});
