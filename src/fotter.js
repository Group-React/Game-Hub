function Footer(){
  return(
    <footer style={{fontFamily:"sans-serif", marginTop:"20%" }} class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about" style={{marginTop:"%"}}>
      <span > About the company</span>
      A group of students from LTUC college created a video game website after finishing the React HTML course
      The group Members (Mohammad Abu-Alhija and Mus'ab Rabi)
      </p>
    <div >
      <a href="https://www.facebook.com/LTUC.JO"><img style={{width:"50px",marginTop:"2%"}} src="https://cdn-icons-png.flaticon.com/128/747/747374.png"></img></a>
      <a href="https://twitter.com/LTUCJO"><img style={{width:"50px" , marginLeft:"2%",marginTop:"2%"}} src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"></img></a>
      <a href="https://www.instagram.com/ltuc.jo/?hl=en"><img style={{width:"50px", marginLeft:"2%",marginTop:"2%"}} src="https://cdn-icons-png.flaticon.com/128/3661/3661391.png"></img></a>
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
      <p><a href="#">Geeks Store@gmail.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> Geeks Store<img style={{width:"50px" ,marginLeft:"2%"}} src="https://cdn-icons-png.flaticon.com/128/3511/3511752.png"></img></h2>
    <p class="menu">
      <a href="/">Store</a> |
      <a href="/Library">Library</a> |
      <a href="#">Categories</a> |
      <a href="/News"> News</a> |
      <a href="/profile">profile</a>
    </p>
    <p class="name"> Geeks Store &copy; 2023</p>
  </div>
</footer>
    )
}
export default Footer;