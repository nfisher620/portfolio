<?php
$images=glob('images/*');
$output_data =[
        'success'=> true,
        'images'=> $images,
        'errors' => ['An error has occured']
        ];
$output =json_encode($output_data);
print($output);
?>