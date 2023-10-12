function Footer(){
  return(
    <footer style={{fontFamily: "serif"}} class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100037053398852"><img style={{width:"50px",marginTop:"2%"}} src="https://cdn-icons-png.flaticon.com/128/747/747374.png"></img></a>
      <a href="https://twitter.com/MOHAMMA69623854"><img style={{width:"50px" , marginLeft:"2%",marginTop:"2%"}} src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"></img></a>
      <a href="https://www.instagram.com/mohammad_2003_12/?hl=en"><img style={{width:"50px", marginLeft:"2%",marginTop:"2%"}} src="https://cdn-icons-png.flaticon.com/128/3661/3661391.png"></img></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p>Irbid - Jordan</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> office@company.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> Geeks Store<img style={{width:"50px" , marginLeft:"2%",marginBottom:"5%"}} src="https://cdn-icons-png.flaticon.com/128/3511/3511752.png"></img></h2>
    <p class="menu">
      <a href="/"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="/News"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p class="name"> Geeks Store &copy; 2023</p>
  </div>
</footer>
    )
}
export default Footer;