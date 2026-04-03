function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // ❌ проверка email (с "собачкой")
  if (!email.includes('@')) {
    alert('❌ Email должен содержать символ @');
    return;
  }

  if (!email.includes('.')) {
    alert('❌ Email должен содержать точку (например .com)');
    return;
  }

  // ❌ сложный пароль
  const valid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

  if (!valid.test(password)) {
    alert('❌ Пароль слишком простой!\nНужно: заглавная, цифра и спецсимвол');
    return;
  }

  // ⏳ имитация проверки
  alert('📩 Проверяем данные...');

  setTimeout(() => {
    document.getElementById('auth').classList.add('hidden');
    document.getElementById('site').classList.remove('hidden');
  }, 2000);
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function openSettings() {
  document.getElementById('settings').classList.toggle('hidden');
}

//
// 🚪 УЛУЧШЕННЫЙ LOGOUT (но не ломает UX)
//
function logoutStep1() {
  if (!confirm('Вы точно хотите выйти?')) return;
  logoutStep2();
}

function logoutStep2() {
  const confirmText = prompt('Напишите "выйти" для подтверждения');

  if (confirmText !== 'выйти') {
    alert('❌ Нужно написать "выйти"');
    return logoutStep2();
  }

  logoutStep3();
}

function logoutStep3() {
  const rating = prompt('Поставьте оценку сайту (1–5)');

  if (!rating || rating < 1 || rating > 5) {
    alert('❌ Оценка должна быть от 1 до 5');
    return logoutStep3();
  }

  alert('⏳ Завершаем сессию...');

  setTimeout(() => {
    alert('👋 Вы вышли');
    location.reload();
  }, 2000);
}

//
// ⭐ Отзывы (оставляем как есть — это норм UX часть)
//
function forceReview() {
  const text = prompt('Напишите отзыв');

  if (!text) {
    alert('❌ Без текста нельзя!');
    return forceReview();
  }

  alert('Спасибо! Ваш отзыв принят 😈');
  
  function login() {
  const email = document.getElementById('email').value;
  const nickname = document.getElementById('nickname').value;
  const age = document.getElementById('age').value;
  const shoe = document.getElementById('shoe').value;
  const password = document.getElementById('password').value;

  // 📧 email
  if (!email.includes('@') || !email.includes('.')) {
    alert('❌ Введите корректный email');
    return;
  }

  // 🎮 ник
  if (!nickname) {
    alert('❌ Введите ник в Brawl Stars');
    return;
  }

  if (nickname.length < 3) {
    alert('❌ Ник слишком короткий');
    return;
  }

  // 🎂 возраст
  if (!age || age < 6 || age > 100) {
    alert('❌ Укажите корректный возраст (6–100)');
    return;
  }

  // 👟 размер ноги
  if (!shoe || shoe < 10 || shoe > 60) {
    alert('❌ Размер ноги должен быть от 10 до 60');
    return;
  }

  // 🔐 пароль
  const valid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

  if (!valid.test(password)) {
    alert('❌ Пароль должен содержать:\nзаглавную букву, цифру и символ');
    return;
  }

  alert('📩 Проверка данных...');

  setTimeout(() => {
    document.getElementById('auth').classList.add('hidden');
    document.getElementById('site').classList.remove('hidden');
  }, 1500);
}
}function addRandomReview() {
  const reviews = [
    "⭐⭐⭐⭐⭐ ЛУЧШИЙ САЙТ 🔥",
    "⭐⭐⭐⭐⭐ Супер, скачал 100 раз!!!",
    "⭐⭐⭐⭐⭐ Очень удобно!",
    "⭐⭐⭐⭐⭐ 10/10, рекомендую!",
    "⭐⭐⭐⭐⭐ Не могу перестать пользоваться 😈"
  ];

  const div = document.createElement('div');
  div.className = 'review';
  div.innerText = reviews[Math.floor(Math.random() * reviews.length)];

  document.getElementById('reviews').appendChild(div);
}

// запуск каждые 10 секунд
setInterval(addRandomReview, 10000);
