$(document).ready(function(){
    buildProjectGallery();
});

function buildProjectGallery() {
    var projects = [
        {
            title: "Cars Cafe",
            src: "images/CarsCafe.png"
        },
        {
            title: "Just Married",
            src: "images/JustMarried.png"
        },
        {
            title: "Tic-Tac-Wars",
            src: "images/TicTacWars.png"
        },
        {
            title: "BlogLog",
            src: "images/BlogLog.png"
        },
        {
            title: "Student Grade Table",
            src: "images/SGT.png"
        },
        {
            title: "Tweet on Fleek",
            src: "images/TweetFleak.png"
        }
    ];

    var container = $('.projects');

    for (var i = 0; i < projects.length; i++) {

        var projectContainer = $("<div>", {
            class: 'img-container',
        });

        var projectImg = $("<img>", {
            src: projects[i].src,
            class: 'gallery-img'
        });

        var projectCover = $("<div>", {
            class: 'text-cover'
        });
        var projectTitle = $("<div>", {
            text: projects[i].title,
            class: 'text'
        });

        projectCover.append(projectTitle);
        projectContainer.append(projectImg, projectCover).appendTo(container);
    }
}
