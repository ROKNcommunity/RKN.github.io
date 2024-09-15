document.addEventListener('DOMContentLoaded', () => {
  const scoreElement = document.querySelector('.score');
  const interactiveImage = document.getElementById('interactive-image');
  const friendsPage = document.getElementById('friends-page');
  const invitationLinkInput = document.getElementById('invitation-link');
  const sendButton = document.getElementById('send-link');
  const copyButton = document.getElementById('copy-link');

  let score = 0;

  // Handle image click
  interactiveImage.addEventListener('click', () => {
      score++;
      scoreElement.textContent = score;

      const scoreAnimation = document.createElement('div');
      scoreAnimation.className = 'score-animation';
      scoreAnimation.textContent = '+1';
      document.body.appendChild(scoreAnimation);

      scoreAnimation.style.left = `${interactiveImage.offsetLeft + interactiveImage.offsetWidth / 2}px`;
      scoreAnimation.style.top = `${interactiveImage.offsetTop + interactiveImage.offsetHeight / 2}px`;

      setTimeout(() => {
          scoreAnimation.remove();
      }, 500);
  });

  // Handle friends option click
  document.querySelector('.option:nth-child(1)').addEventListener('click', () => {
      friendsPage.classList.remove('hidden');
      document.querySelector('.main-content').classList.add('hidden');
  });

  // Handle send and copy link buttons
  sendButton.addEventListener('click', () => {
      const link = invitationLinkInput.value;
      window.Telegram.WebApp.sendMessage(link);
  });

  copyButton.addEventListener('click', () => {
      invitationLinkInput.select();
      document.execCommand('copy');
  });
});
