document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('#login form');
  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(loginForm);
      const userDetails = {
          user_type: formData.get('user_type'),
          email: formData.get('email'),
          password: formData.get('password')
      };

      fetch('/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userDetails)
      }).then(response => response.json())
      .then(data => {
          if (data.success) {
              window.location.href = '/home'; // 如果登入成功，重定向到主頁
          } else {
              alert('Login failed: ' + data.message); // 如果登入失敗，顯示錯誤消息
          }
      });
  });
});
