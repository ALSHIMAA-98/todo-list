import Footer from './footer.module.css'
import contactS from './contact.module.css'
export default function Contact(){
    return<>
    <div className="container">
    <div class="page-wrap">
        <div className={contactS.pagewrap}>
          <h2>about</h2>
        </div>
        <div className={contactS.pagewrap}>
          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nobis odit necessitatibus ad rerum
            harum quidem, velit, voluptate quo, provident est autem.
            Voluptatum amet facere recusandae reprehenderit numquam
            ipsa dolores cumque?</p>
        </div>
        </div>
      </div>
    </>
}