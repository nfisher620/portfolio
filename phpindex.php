<?php
$images=glob('images/*');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Nicole Fisher</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <style>
                .carousel-inner > .item > img,
                .carousel-inner > .item > a > img {
                             width: 70%;
                             margin: auto;
                         }
                .width{
                             width:25%;
                         }
            </style>
    </head>
<body>

<div class="container">
        <br>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                        <?php
                        $active="active";
                       for($i=0; $i<count($images); $i++){
                                ?>
                                <li data-target="#myCarousel" data-slide-to="<?php print ($i); ?>" class= '<?php print($active);?>'></li>
                                <?php
                $active='';
            }
            ?>
                    </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                        <?php
                        $active="active";
                        for($i=0; $i<count($images); $i++){
                                ?>
                                <div class="<?php print($active); ?> item ">
                                        <img src="<?php print($images[$i]);   ?>" width="460" height="345">
                                    </div>
                                <?php
                $active='';
            }
            ?>
                    </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
    </div>
<?php
    include("get_images.php");
    include("gallery.php");
?>
</body>
</html>
