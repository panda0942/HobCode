const videoUrls = [
    "https://www.youtube.com/embed/S5PgJFhakKw?si=ATS86fLJ7HlYatfz" ,
    "https://www.youtube.com/embed/di2e1QpKYUY?si=dKSWxJW1erIVwdE9" ,
    "https://www.youtube.com/embed/c6iUreqsFzs?si=zE_jVsFzCNumvmsZ" ,
    "https://www.youtube.com/embed/oQQroSjxc74?si=3S2rOn-Ld070qO23" ,
    "https://www.youtube.com/embed/QlSe2ZnVkFw?si=O9nIj3v3eQPciCr5" ,
    "https://www.youtube.com/embed/UnBL8h8TVX8?si=3qNXZnv3MQ-GI6AG" ,
    "https://www.youtube.com/embed/CC4pQ39U_f0?si=0XPJuCzpieygh5xk" ,
    "https://www.youtube.com/embed/rYd2PN4EUOY?si=7FCpjNHxHHIG1qI8" ,
    "https://www.youtube.com/embed/s_6-7LeNwRw?si=ZI11bL6Jn15A8YKX" ,
    "https://www.youtube.com/embed/0kjoptCr8Vc?si=P6BaF1SIwzSWzk0z" ,
    "https://www.youtube.com/embed/2AbRSQuKA7w?si=KQyBqWhWAju8nuAo" ,
    "https://www.youtube.com/embed/66vOth5oEZo?si=qtI4xOZdrlDQVQmt" ,
    "https://www.youtube.com/embed/twCUd-QqIZ0?si=BLxyrOu3cQlYZAfx" , 
    "https://www.youtube.com/embed/P3sDjCGfIQM?si=t_MWDVUF84YMyEmv" ,
    "https://www.youtube.com/embed/oZZny0pxQHo?si=U_Cqfp4qXLI5ku7J" ,
    "https://www.youtube.com/embed/ql1HSDf0WKw?si=OC93HWVpPlwNNt-w" ,
    "https://www.youtube.com/embed/rzp91kXFBzg?si=cJvdfu-4ZfzN0wkd" ,

    // Add more video URLs here
];

let currentVideoIndex = 0;
const videoIframe = document.getElementById('video');

// Function to update the video iframe source
function updateVideo() {
    videoIframe.src = videoUrls[currentVideoIndex];
}

// Event listener for the next button
document.getElementById('nextButton').addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
    updateVideo();
});

// Event listener for the previous button
document.getElementById('prevButton').addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videoUrls.length) % videoUrls.length;
    updateVideo();
});

// Initialize the video with the first URL F98b7638 
updateVideo();


