export function renderHomePage() {
  const pageContent = document.getElementById("page-content");

  pageContent.innerHTML = "";

  const section = document.createElement("div");
  section.className = "home-social-section text-center";

  const title = document.createElement("h2");

  title.textContent = "Urmărește-ne și pe rețelele sociale";

  title.className = "text-light mb-4";

  section.appendChild(title);

  const socialWrapper = document.createElement("div");

  socialWrapper.className = "social-buttons";

  const facebookSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 320 512" fill="currentColor">
      <path d="M279.14 288l14.22-92.66h-88.91V127.33c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.14 0-121.08 44.38-121.08 124.72V195.3H22.89V288h81.39v224h100.2V288z"/>
    </svg>`;

  const tiktokSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 448 512" fill="currentColor">
      <path d="M448,209.9V153.8c-41.6-0.4-78.6-26.2-92.5-64h0V48h-62.2v297.5c0,40.2-32.5,73.7-72.5,74.5c-41.2,0.9-75.2-32.9-75.2-74c0-41,33.3-74.3,74.3-74.3c6.5,0,12.9,0.9,18.9,2.6v-63.1c-6.3-0.8-12.6-1.3-18.9-1.3c-75.1,0-135.9,60.8-135.9,135.9S175,512,250.1,512c73.9,0,134.1-58.2,135.9-132.1c0-1.3,0-2.7,0-4V209.9z"/>
    </svg>`;

  const youtubeSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 576 512" fill="currentColor">
      <path d="M549.7 124.1c-6.3-23.8-25-42.5-48.8-48.8C458.4 64 288 64 288 64s-170.4 0-212.9 11.3c-23.8 6.3-42.5 25-48.8 48.8C16 166.6 16 256 16 256s0 89.4 10.3 131.9c6.3 23.8 25 42.5 48.8 48.8C117.6 448 288 448 288 448s170.4 0 212.9-11.3c23.8-6.3 42.5-25 48.8-48.8C560 345.4 560 256 560 256s0-89.4-10.3-131.9zM232 336V176l142.7 80L232 336z"/>
    </svg>`;

  const socialMedia = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: facebookSvg,
      className: "facebook",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/",
      icon: tiktokSvg,
      className: "tiktok",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/",
      icon: youtubeSvg,
      className: "youtube",
    },
  ];

  socialMedia.forEach((item) => {
    const btn = document.createElement("a");

    btn.href = item.url;

    btn.target = "_blank";

    btn.className = `btn btn-outline-light mx-2 social-btn ${item.className}`;

    btn.innerHTML = `${item.icon} ${item.name}`;

    socialWrapper.appendChild(btn);
  });

  section.appendChild(socialWrapper);

  pageContent.appendChild(section);
}
