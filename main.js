window.onload = () =>{
    let scrollpos = window.scrollY; 
    const about = document.querySelector("#about > div")
    const tech = document.querySelector("#skills > div")
    const projects = document.querySelector("#projects > div")
    const certificate = document.querySelector("#certificate > div") 
    const add_class_on_scroll = (dom) => dom.classList.add("come-in")  
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY; 
      if (scrollpos >= about.offsetHeight -500) add_class_on_scroll(about)
      if (scrollpos >= tech.offsetHeight -1200) add_class_on_scroll(tech)
      if (scrollpos >= projects.offsetHeight +1200) add_class_on_scroll(projects)
      if (scrollpos >= certificate.offsetHeight -1000 ) add_class_on_scroll(certificate) 
    }) 
} 
document.addEventListener("DOMContentLoaded", _ => {
 const topBtn = document.querySelector(".move");

  // 버튼 클릭 시 맨 위로 이동
  topBtn.addEventListener('click',()=>{
    window.scrollTo(0,0);
  })
})