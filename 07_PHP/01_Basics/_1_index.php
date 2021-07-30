<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embedded PHP in HTML</title>
    <!-- Sample 5: Print Javascript alert -->
    <script type="text/javascript">
        <?=
        "alert('I am coming from PHP!')";
        ?>
    </script>
</head>

<body>
    <h1>PHP basics</h1>
    <!-- Sample 1 -->
    <?php echo "Hello Max!" ?>

    <!-- Sample 2: include html tags inside php tags -->
    <?php print "<p>Sample 1: This text is printed from PHP!</p>";
    ?>

    <!-- Short hand printing -->
    <?= "<hr>" ?>

    <!-- Include PHP tag inside HTML tags -->
    <p>
        <?php 
        echo "Sample 2: This text is printed from PHP!"
        ?>
    </p>

    <!-- Sample 3: Print regular HTML with styles -->
    <p style="color:red"> Sample 3: This is a red text!</p>

    <!-- Use PHP to print with styles -->
    <?php 
    echo '<p style="color:red"> Sample 3: This is a red text!</p>'
    ?>
    <!-- Another way -->
    <p <?= 'style="color:red"' ?>> Sample 3: This is a red text!</p>

    <!-- Sample 4 -->
    <?= "<p>" ?>
        Sample 4: This text is printed from PHP!
    <?= "</p>" ?>
</body>

</html>