let currentImageIndex = 0;
let galleryImagePaths = [];

function openLightbox(imgPath) {
  if (document.getElementById("lightbox-overlay")) {
    closeLightbox();
  }

  currentImageIndex = galleryImagePaths.indexOf(imgPath);

  const overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.className = "lightbox-overlay";

  const container = document.createElement("div");
  container.id = "lightbox-container";
  container.className = "lightbox-container";

  const img = document.createElement("img");
  img.src = imgPath;
  img.alt = "Imagine mărită";

  container.appendChild(img);

  const closeBtn = document.createElement("button");
  closeBtn.className = "lightbox-close-btn";
  closeBtn.innerHTML = "&times;";

  closeBtn.addEventListener("click", closeLightbox);

  container.appendChild(closeBtn);

  const prevBtn = document.createElement("button");

  prevBtn.className = "lightbox-nav-btn lightbox-prev-btn";

  prevBtn.innerHTML = "&#10094;";

  prevBtn.addEventListener("click", showPrevImage);

  container.appendChild(prevBtn);

  const nextBtn = document.createElement("button");
  nextBtn.className = "lightbox-nav-btn lightbox-next-btn";
  nextBtn.innerHTML = "&#10095;";
  nextBtn.addEventListener("click", showNextImage);
  container.appendChild(nextBtn);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", handleEscapeKey);
  document.addEventListener("keydown", handleArrowKeys);

  document.body.appendChild(overlay);
  document.body.appendChild(container);

  updateNavButtonsVisibility();
}

function showPrevImage(e) {
  e.stopPropagation();
  currentImageIndex =
    (currentImageIndex - 1 + galleryImagePaths.length) %
    galleryImagePaths.length;
  updateLightboxImage();
}

function showNextImage(e) {
  e.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % galleryImagePaths.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const imgElement = document.querySelector("#lightbox-container img");
  if (imgElement && galleryImagePaths[currentImageIndex]) {
    imgElement.src = galleryImagePaths[currentImageIndex];
  }
}

function updateNavButtonsVisibility() {
  const prevBtn = document.querySelector(".lightbox-prev-btn");
  const nextBtn = document.querySelector(".lightbox-next-btn");

  if (galleryImagePaths.length <= 1) {
    if (prevBtn) prevBtn.style.display = "none";
    // dacă există. // Ascunde butonul "Următor"
    // dacă există.
  } else {
    if (prevBtn) prevBtn.style.display = "block";
    // dacă există mai multe imagini.
    if (nextBtn) nextBtn.style.display = "block";
  }
}

function closeLightbox() {
  const overlay = document.getElementById("lightbox-overlay");
  const container = document.getElementById("lightbox-container");

  if (overlay && container) {
    overlay.remove();
    container.remove();

    document.removeEventListener("keydown", handleEscapeKey);
    document.removeEventListener("keydown", handleArrowKeys);
  }
}

function handleEscapeKey(e) {
  if (e.key === "Escape") closeLightbox();
}

function handleArrowKeys(e) {
  if (e.key === "ArrowLeft") {
    showPrevImage(e);
  } else if (e.key === "ArrowRight") {
    showNextImage(e);
  }
}

export function renderGalleryPage() {
  const pageContent = document.getElementById("page-content");
  pageContent.innerHTML = "";

  const gallery = document.createElement("div");
  gallery.className = "gallery-section container";

  const title = document.createElement("h2");
  title.textContent = "Poze";
  title.className = "text-center my-4";
  gallery.appendChild(title);

  const imagesRow = document.createElement("div");
  imagesRow.className = "gallery-row";

  galleryImagePaths = [
    "poze/poza1.jpg",
    "poze/poza2.jpg",
    "poze/poza3.jpg",
    "poze/poza4.jpg",
    "poze/poza5.jpg",
    "poze/poza6.jpg",
    "poze/poza7.jpg",
    "poze/poza8.jpg",
    "poze/poza9.jpg",
    "poze/poza10.jpg",
  ];

  galleryImagePaths.forEach((src) => {
    const wrapper = document.createElement("div");
    wrapper.className = "gallery-item";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Poză din galerie";
    img.className = "img-fluid";

    img.addEventListener("click", () => openLightbox(src));

    wrapper.appendChild(img);
    imagesRow.appendChild(wrapper);
  });

  gallery.appendChild(imagesRow);

  const videoTitle = document.createElement("h2");
  videoTitle.textContent = "Video";
  videoTitle.className = "text-center my-4 mt-5";
  gallery.appendChild(videoTitle);

  const videoRow = document.createElement("div");
  videoRow.className = "gallery-row";

  const videoSources = [
    "video/video1.mp4",
    "video/video2.mp4",
    "video/video3.mp4",
    "video/video4.mp4",
  ];

  videoSources.forEach((src) => {
    const wrapper = document.createElement("div");
    wrapper.className = "gallery-item video-item";

    const video = document.createElement("video");
    video.src = src;
    video.controls = true;

    wrapper.appendChild(video);
    videoRow.appendChild(wrapper);
  });

  gallery.appendChild(videoRow);

  pageContent.appendChild(gallery);
}
