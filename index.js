
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SIMATS Transport</title>
    <link href="css/style.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/font-awesome.css" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="img/favicon.ico">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <!-- <script src="js/bootstrap.min.js"></script> -->
    <style>
        .validity {
            font-size: 14px;
            vertical-align: middle;
            text-transform: capitalize;
            padding: 3px;
			
        }
		

    </style>
</head>

<body class="viewpass-bg">
    
    <header>
    <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="viewPass.php">
            <div class="logo">
                <img src="img/logo.png" alt="SIMATS Logo">
                <h1>SIMATS TRANSPORTS</h1>
            </div>
        </a>
        <!-- <button class="navbar-toggler" style="margin-right:5px !important;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button> -->

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto nav-links">
                <li class="nav-item active"> <a href="viewPass.php" style="text-decoration: none">Home</a> </li>
				 
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle bus-search active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pass Details
                    </a>
                    <div class="dropdown-menu pass-req" aria-labelledby="navbarDropdown">
                       
                             <a class="dropdown-item " href="renewpass.php">Renew Pass</a>                        <!-- <a class="dropdown-item " href="bus_search.php">Pass Request</a>

                        <a class="dropdown-item " href="renewpass.php">Renew Pass</a> -->

                        <a class="dropdown-item " href="payment.php">Payment Status</a>
                        <!-- <a class="dropdown-item active" href="viewPass.php">View Pass</a> -->
                    </div>
                </li>
				 <!-- <li class="nav-item "> <a href="payment.php" style="text-decoration: none">Payment Status</a> </li> -->
				   <li class="nav-item "> <a href="notification2.php" style="text-decoration: none">Notification</a> </li>
                <!--<li class="nav-item "> <a href="checkbuscount.php" style="text-decoration: none">Check Availability</a> </li>-->
                <li class="nav-item "> <a href="feedback2.php" style="text-decoration: none">Raise Issue</a> </li>
                <li class="nav-item "> <a href="daily-attendance.php" style="text-decoration: none">Attendance</a> </li>
				<li class="nav-item "> <a href="contactdetails.php" style="text-decoration: none">Contact</a> </li>
            </ul>
            <ul class="form-inline right-nav my-2 my-lg-0 ps-0">
               
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle pe-0" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <!-- <img src="image/212222230108 - Praveen kumar S.png" class="header-img"> -->
                    <img src="image/profile-image.png" alt="profile" class="header-img">
                    </a>
                    <div class="dropdown-menu prof-drop" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="profile2.php">Profile</a>
                        <a class="dropdown-item" href="changepassword2.php">Change Password</a>
						<a class="dropdown-item" href="updateprofile.php">Change Profile Picture</a>
                    </div>
                </li>
                <li class="nav-item">
                <a class="nav-link log-out" href="index.php"><i class="fa fa-sign-out" aria-hidden="true"></i> <span>Logout</span></a>
                </li>
            </ul>
        </div>
        </nav>
        


        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
            <div class="offcanvas-header">
                <h6 class="offcanvas-title d-sm-block" id="offcanvas">&nbsp;</h6>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body px-0">
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                    <!-- <li class="nav-item">
                        <a href="studentHomePage.php" class="nav-link text-truncate">
                        <img src="img/home.png" /><span class="ms-3 d-sm-inline">Home</span>
                        </a>
                    </li> -->

                    <li class="dropdown">
                    <a href="#" class="nav-link dropdown-toggle  text-truncate dropbtn" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false" aria-labelledby="dropdown">
                    <img src="img/pass.jpeg" /><span class="ms-3 d-sm-inline"> Pass Details</span>
                    </a>
                        <ul class="dropdown-menu dropdown-content" aria-labelledby="dropdown">
                        <li><a class="dropdown-item" href="renewpass.php">Renew Pass</a></li>                           
                            <li><a class="dropdown-item" href="payment.php">Payment Status</a></li>
                            
                        </ul>
                    </li>
                   <!-- <li>
                        <a href="payment.php" class="nav-link text-truncate">
                        <img src="img/pass.jpeg" /><span class="ms-3 d-sm-inline">Payment Status</span> </a>
                    </li>
                     <li>
                        <a href="notification2.php" class="nav-link text-truncate">
                        <img src="img/notification.png" /><span class="ms-3 d-sm-inline">Notification</span></a>
                    </li> 
                    <li>
                        <a href="checkbuscount.php" class="nav-link text-truncate">
                        <img src="img/complaint.png" /><span class="ms-3 d-sm-inline">Check Availability</span></a>
                    </li>-->
                    <li>
                        <a href="feedback2.php" class="nav-link text-truncate">
                        <img src="img/notification.png" /><span class="ms-3 d-sm-inline">Raise Issue</span></a>
                    </li>
                     <li>
                        <a href="daily-attendance.php" class="nav-link text-truncate">
                        <img src="img/attendance-info.png" /><span class="ms-3 d-sm-inline">Attendance</span> </a>
                    </li>
					 <li>
                        <a href="contactdetails.php" class="nav-link text-truncate">
                        <img src="img/contact-icon.png" width="50" height="50" /><span class="ms-3 d-sm-inline">Contact</span> </a>
                    </li>
                    <!--<li>
                        <a href="changepassword2.php" class="nav-link text-truncate">
                        <img src="img/change.jpeg" /><span class="ms-3 d-sm-inline">Change Password</span> </a>
                    </li>
                    <li>
                        <a href="updateprofile.php" class="nav-link text-truncate">
                        <img src="img/change.jpeg" /><span class="ms-3 d-sm-inline">Change Profile Picture</span> </a>
                    </li> -->
                    <li>
                        <a href="index.php" class="nav-link text-truncate">
                        <img src="img/logout.png" /><span class="ms-3 d-sm-inline">Logout</span> </a>
                    </li>
                </ul>
            </div>
        </div>


        <button class="btn float-end mob-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
            <i class="fa fa-bars fs-3" aria-hidden="true" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
        </button>


    </div>
</header>

<style>
.nav-links {
    margin-top: 5px;
}
.nav-link.dropdown-toggle.bus-search {
    position: relative;
    color: #fff !important;
}
.nav-link.dropdown-toggle.bus-search:hover {
    position: relative;
    color: #fff !important;
    transition: all 300ms ease-in;
}

.pass-req .dropdown-item{
    box-shadow: none;
    border-bottom: 1px solid #f2f2f2;
    padding-top: 5px;
    padding-bottom: 5px;
}
.dropdown-toggle.bus-search.active{
    background: #418bed;
    color: #fff !important;
} 

/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-left:10px;
}

/* Style the links inside the dropdown */
.dropdown-content a {
    float: none;
    color: #418bed;
    padding: 10px 15px;
    display: block;
    text-align: left;
    border-bottom: 1px solid #ccc;
}


</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<script src="js/bootstrap.min.js"></script>

<script>
    $(document).ready(function() {
    $(".dropdown-bs-toggle").dropdown();
});
</script>

<script>
    $(document).ready(function() {
        // Toggle dropdown submenu on click
        $('.dropdown').on('click', function() {
            $(this).find('.dropdown-menu').toggle();
        });
    });
</script>    <div class="container">
        <div class="view-pass">
            <div class="pass-section">
				<div class="pass-section-success">
                    <h2 class="pass-h2" id="dynamic-date"></h2>
					<div class="validity d-block"><span >VALID</span></div>
                </div>
                

                <div class="pass-title">
                    <img class="wh-wid" style="width:100%;" src="image/212222230108 - Praveen kumar S.png" alt="pass">
                </div>

                <p class="h-20"><img src="image/212222230108.png" class="img-qr" alt="qr"></p>
                <div class="mt-4 passenger-details">
                    <h3>Sivaramakrishnan B</h3>
                    <h4>212222110044</h4>
                </div>
				<div class="pass-section-success">
                <div class="pass-head">
                    <h1 class="green-pass">Velachery II 18B</h1>                </div>
				</div>

                <!-- <div class="pass-route">
                    <p><span>Guru Nanak College</span> <span>&nbsp;<img src="img/arrow2.jpg" width="15"> &nbsp;</span> <span> Thandalam Campus</span></p>
                </div> -->
            </div>
        </div>
    </div>
    </div>
    
<footer>
        &copy; SIMATS - 2024
</footer> 

<!-- script to hide right click inspect -->
<script>
    // Function to enter full-screen mode
    function enterFullScreen() {
        var element = document.documentElement;
        var requestMethod = element.requestFullscreen || element.webkitRequestFullscreen || element.mozRequestFullScreen || element.msRequestFullscreen;

        if (requestMethod) {
            requestMethod.call(element);
        }
    }

    // Function to disable right-click and inspect key combinations
    function preventDeveloperTools() {
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        document.onkeydown = function(e) {
            // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J, Ctrl+U, Cmd+Opt+I
            if (
                e.keyCode == 123 || // F12 key
                (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67)) || // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
                (e.ctrlKey && e.keyCode == 85) || // Ctrl+U
                (e.metaKey && e.altKey && e.keyCode == 73) // Cmd+Opt+I (for Mac)
            ) {
                return false;
            }
        };
    }

    function formatDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  }

  // Update the content of the <h2> tag
  document.getElementById('dynamic-date').textContent = formatDate();


    // Disable copy-paste
    // document.addEventListener('cut', function (e) {
    //     e.preventDefault();
    // });
    // document.addEventListener('copy', function (e) {
    //     e.preventDefault();
    // });
    // document.addEventListener('paste', function (e) {
    //     e.preventDefault();
    // });

    // Call necessary functions on page load
    window.onload = function() {
        enterFullScreen();
        preventDeveloperTools();
    };
</script>    <div class="bottom-footer">
    <div class="container">
        <ul>
            <!-- <li><a href="feedback2.php"><img src="img/f1.png" alt="f1"/></a></li>
            <li><a href="index.php"><img src="img/f2.png" alt="f2"/></a></li> -->
            <li><a href="profile2.php"><img src="img/user-prof.png" alt="f2"/></a></li>
            <li><a href="viewPass.php" class="mob-home"><img src="img/f5.png" alt="f5"/></a></li>
            <li><a href="notification2.php"><img src="img/f3.png" alt="f3"/></a></li> 
            <!-- <li><a href="index.php"><img src="img/f4.png" alt="f4"/></a></li> -->
        </ul>
    </div>
</div></body>

</html>