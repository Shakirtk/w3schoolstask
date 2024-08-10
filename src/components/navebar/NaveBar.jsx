import './NaveBar.css'

function  NaveBar(){
    return (
        <div>
            <div className="nav1">
                <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png" alt=""  className="logo"/>
                </div>
                <div className='a1'>
                    <p className='p'>Tutorials</p>
                </div>
                <div className='a2'>
                    <p className='p'>Exercises</p>
                </div>
                <div className='a3'>
                    <p className='p'>Certificates</p>
                </div>
                <div className='a4'>
                    <p className='p'>Services</p>
                </div>
                <div className='inp'>
                    <input type="text" className='search' placeholder='     Search...'/>
                    <img src="https://i.pinimg.com/originals/8a/38/97/8a38978ac4d3727e2b9e9d1ae6af34bf.png" alt="" className='searchlogo'/>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/ff/7f/95/ff7f95523eab18c3b38c1cf144b87aab.png" alt="" className='circle' />
                </div>
                <div className='nav2'>
                    <div className='plusdiv'>
                    <img className='plusimg' src="https://t4.ftcdn.net/jpg/05/25/99/99/360_F_525999967_wAVN5ly4QzX525YRZpzSzK9nICQjIqUV.jpg" alt="" />
                    <p className='plush'>Plus</p>
                    </div>
                     <div className='Spacesdiv'>
                    <img className='Spacesimg' src="https://cdn-icons-png.flaticon.com/512/25/25185.png" alt="" />
                    <p className='Spacesh'>Spaces</p>
                    </div>
                    <div className='getdiv'>
                    <img className='getimg' src="https://cdn-icons-png.freepik.com/512/8146/8146003.png" alt="" />
                    <p className='geth'>Get Certified</p>
                    </div>
                    <div className='silo'> 
                        <button className='sign'>Sign Up</button>
                        <button className='log'>Log in</button>
                    </div>
                </div>
            </div>
            <div className='nave3'>
                <div className='nave3sp'>
                    <p className='span'>HTML</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>CSS</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>JAVASCRIPT</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>SQL</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>PYTHON</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>JAVA</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>PHP</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>HOWOT</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>W3.CSS</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>C</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>C++</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>C#</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>BOODSTRAP</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>REACT</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>MYSQL</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>JQUERY</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>EXCEL</p>
                </div>
                <div className='nave3sp'>
                    <p className='span'>XML</p>
                </div>
            </div>
            <div className='main'>
                <section className="hero">
                    <h1>Learn to Code</h1>
                    <p>With the world's largest web developer site.</p>
                    <div className="search-bar">
                        <input className='searchi' type='text' placeholder='Search our tutorials, e.g. HTML;'/>
                        <button className='searchb'>Search</button>
                    </div>
                    <a href="#" className="cta">Not Sure Where To Begin?</a>
                </section>
            </div>



            <div className='t1'>
            <div className="container">
            <div className="content">
                <h1 className='h1'>HTML</h1>
                <p className='sp'>The language for building web pages</p>
                <button className="learn-html">Learn HTML</button>
                <button className="video-tutorial">Video Tutorial</button>
                <button className="html-reference">HTML Reference</button>
                <button className="get-certified">Get Certified</button>
            </div>
            <div className="example">
                <h2>HTML Example:</h2>
                <div className="code-box">
                    <pre><code>
{`<!DOCTYPE html>
<html>
<head>
    <title>HTML Tutorial</title>
</head>
<body>


    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>


</body>
</html>`}
                    </code></pre>
                </div>
                <button className="try-it">Try it Yourself</button>
            </div>
        </div>
        </div>



        <div className='t2'>
            <div className="container">
            <div className="content">
                <h1 className='h1'>CSS</h1>
                <p className='sp'>The language for styling web pages</p>
                <button className="learn-html">Learn CSS</button>
                <button className="html-reference">CSS Reference</button>
                <button className="get-certified">Get Certified</button>
            </div>
            <div className="example">
                <h2>CSS Example:</h2>
                <div className="code-box">
                    <pre><code>
{`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
}`}
                    </code></pre>
                </div>
                <button className="try-it">Try it Yourself</button>
            </div>
        </div>
        </div>



        <div className='t3'>
            <div className="container">
            <div className="content">
                <h1 className='h1'>JavaScript</h1>
                <p className='sp'>The language for programming web pages</p>
                <button className="learn-html">Learn HTML</button>
                <button className="html-reference">JavaScript Reference</button>
                <button className="get-certified">Get Certified</button>
            </div>
            <div className="example">
                <h2>JavaScript Example:</h2>
                <div className="code-box">
                    <pre><code>
{`<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>`}
                    </code></pre>
                </div>
                <button className="try-it">Try it Yourself</button>
            </div>
        </div>
        </div>


        <div className='t4'>
            <div className="container">
            <div className="content">
                <h1 className='h1'>Python</h1>
                <p className='sp'>A popular programming language</p>
                <button className="learn-html">Learn Python</button>
                <button className="html-reference">Python Reference</button>
                <button className="get-certified">Get Certified</button>
            </div>
            <div className="example">
                <h2>Python Example:</h2>
                <div className="code-box">
                    <pre><code>
{`if 5 > 2:
  print("Five is greater than two!")`}
                    </code></pre>
                </div>
                <button className="try-it">Try it Yourself</button>
            </div>
        </div>
        </div>


        <div className='t5'>
            <div className="container">
            <div className="content">
                <h1 className='h1'>SQL</h1>
                <p className='sp'>A language for accessing databases</p>
                <button className="learn-html">Learn SQL</button>
                <button className="html-reference">SQL Reference</button>
                <button className="get-certified">Get Certified</button>
            </div>
            <div className="example">
                <h2>SQL Example:</h2>
                <div className="code-box">
                    <pre><code>
{`SELECT * FROM Customers
WHERE Country='Mexico';`}
                    </code></pre>
                </div>
                <button className="try-it">Try it Yourself</button>
            </div>
        </div>
        </div>

        </div>

    );
}

export default NaveBar;