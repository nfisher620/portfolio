$(document).ready(function(){
    buildProjectGallery();
});

function buildProjectGallery() {
    var projects = [
        {
            title: "Cars Cafe",
            src: "images/CarsCafe.png",
            text: "Cars cafe is "

        },
        {
            title: "Just Married",
            src: "images/JustMarried.png",
            text: "Cars cafe is "
        },
        {
            title: "Tic-Tac-Wars",
            src: "images/TicTacWars.png",
            text: "Cars cafe is "
        },
        {
            title: "BlogLog",
            src: "images/BlogLog.png",
            text: "Cars cafe is "
        },
        {
            title: "Student Grade Table",
            src: "images/SGT.png",
            text: "Cars cafe is "
        },
        {
            title: "Tweet on Fleek",
            src: "images/TweetFleak.png",
            text: "Cars cafe is "
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
        var projectDescContainer = $('<div>',{
        });
        var projectDescription = $('<p>',{
            text: projects[i].text,
            class:"description"
            });
        projectDescContainer.append(projectDescription);
        projectCover.append(projectTitle);
        projectContainer.append(projectImg, projectCover).appendTo(container);
        container.append(projectDescContainer);
    }
}

