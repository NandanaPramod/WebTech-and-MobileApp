// --------------------------------------------------------------
// All experiment demos - fully functional, no emojis
// --------------------------------------------------------------

const experiments = {
  studentListsTable: {
    title: "Structured Data UI: Lists & Tables",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Student Record: Lists & Table</h3>
          <h4>General Details (Unordered)</h4>
          <ul><li>Name: John Doe</li><li>Department: CSE</li><li>Year: 3rd</li><li>Section: A</li></ul>
          <h4>Academic Info (Ordered)</h4>
          <ol><li>Semester 5</li><li>Course: Web Technologies</li><li>Registration Steps: Fill form → Verify → Enroll</li></ol>
          <h4>Student Records Table</h4>
          <table border="1"><table><th>Roll No</th><th>Name</th><th>Grade</th></tr>
          <tr><td>101</td><td>Riya Sharma</td><td>A+</td></tr>
          <tr><td>102</td><td>Arjun Verma</td><td>B+</td></tr>
          </table>
        </div>
      `;
    }
  },
  bookstoreDemo: {
    title: "E‑Commerce Frame Simulation",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Online Book Store</h3>
          <div style="background:#2a3532; border-radius:20px; overflow:hidden;">
            <div style="background:#545b33; padding:12px; text-align:center;">BookHaven</div>
            <div style="display:flex; flex-wrap:wrap;">
              <div style="width:180px; background:#1f2827; padding:15px;">
                <button id="catBtn" style="margin:5px 0; width:100%;">Catalogue</button>
                <button id="loginBtn" style="margin:5px 0; width:100%;">Login</button>
                <button id="regBtn" style="margin:5px 0; width:100%;">Register</button>
              </div>
              <div id="bookDynamic" style="flex:1; padding:15px; min-height:200px;">Click a button</div>
            </div>
          </div>
        </div>
      `;
      const catBtn = container.querySelector('#catBtn');
      const loginBtn = container.querySelector('#loginBtn');
      const regBtn = container.querySelector('#regBtn');
      const bookDynamic = container.querySelector('#bookDynamic');
      catBtn.onclick = () => { bookDynamic.innerHTML = '<h4>Catalogue</h4><table border=1><tr><th>ID</th><th>Book</th><th>Author</th><th>Price</th></tr><tr><td>B01</td><td>Clean Code</td><td>Martin</td><td>$50</td></tr><tr><td>B02</td><td>The Pragmatic Programmer</td><td>Hunt</td><td>$45</td></tr></table>'; };
      loginBtn.onclick = () => { bookDynamic.innerHTML = '<form><input placeholder="Username" style="margin:5px 0;"><br><input type="password" placeholder="Password" style="margin:5px 0;"><br><button>Login</button></form>'; };
      regBtn.onclick = () => { bookDynamic.innerHTML = '<form><input placeholder="Name" style="margin:5px 0;"><br><input placeholder="Email" style="margin:5px 0;"><br><input placeholder="Password" style="margin:5px 0;"><br><button>Sign Up</button></form>'; };
      catBtn.click();
    }
  },
  iframeImageDemo: {
    title: "Dynamic Media Embedding",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Iframe Image Loader</h3>
          <button id="loadImgBtn">Load Image Page in iFrame</button>
          <iframe id="imgIframe" width="100%" height="300" srcdoc="<html><body style='background:#2c3e2f;text-align:center;padding:20px;'>Click button to load image</body></html>" style="border:2px solid #7f8954; margin-top:15px;"></iframe>
        </div>
      `;
      const btn = container.querySelector('#loadImgBtn');
      const iframe = container.querySelector('#imgIframe');
      btn.onclick = () => {
        iframe.srcdoc = `<html><body style='background:#1f2a25;text-align:center;'><img src='https://picsum.photos/id/104/400/250' style='max-width:100%;border-radius:20px;margin-top:20px'/><h3 style='color:#7f8954'>Mountain View</h3></body></html>`;
      };
    }
  },
  studentFormDemo: {
    title: "Lead Collection Form",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Student Information Form</h3>
          <form id="studentFormDemo">
            <input type="text" placeholder="Full Name" required><br>
            <input type="email" placeholder="Email"><br>
            <select><option>CSE</option><option>ECE</option></select><br>
            <label><input type="radio" name="gender"> Male</label>
            <label><input type="radio" name="gender"> Female</label><br>
            <textarea placeholder="Address"></textarea><br>
            <button type="submit">Submit</button>
          </form>
          <p style="font-size:12px">(Demonstrates client‑side data collection)</p>
        </div>
      `;
      const form = container.querySelector('#studentFormDemo');
      form.onsubmit = (e) => { e.preventDefault(); alert('Form data collected (simulated)'); };
    }
  },
  mapHotspotDemo: {
    title: "Interactive Map with Hotspots",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Real Google Maps Embed</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966309534301!2d-74.006258684594!3d40.712776079328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e9d5e2d%3A0xc89ffe6e2a5d6b0!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus" 
            width="100%" 
            height="300" 
            style="border:2px solid #7f8954; border-radius:16px; margin-bottom:30px;" 
            allowfullscreen="" 
            loading="lazy">
          </iframe>
          
          <h3>Image Map with Hotspots</h3>
          <p>Click on the library or cafeteria area in the real map image below:</p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_York_City_Map.png/800px-New_York_City_Map.png" 
            width="600" 
            alt="Real Map of New York" 
            usemap="#realmap" 
            style="max-width:100%; border-radius:16px; border:1px solid #545b33;">
          <map name="realmap">
            <area shape="rect" coords="180,200,320,280" href="javascript:void(0)" id="libArea" alt="Library">
            <area shape="circle" coords="520,140,45" href="javascript:void(0)" id="cafeArea" alt="Cafe">
          </map>
          <div id="infoFrame" style="margin-top:20px; background:#2a3532; padding:12px; border-radius:20px; text-align:center;">
            Click on a hotspot in the map image above.
          </div>
          <p style="font-size:12px; margin-top:10px;"><em>(Map image source: Wikimedia Commons – New York City Map)</em></p>
        </div>
      `;
      const info = container.querySelector('#infoFrame');
      const lib = container.querySelector('#libArea');
      const cafe = container.querySelector('#cafeArea');
      if (lib) lib.onclick = () => info.innerHTML = "📍 Library Section – thousands of books and quiet study areas.";
      if (cafe) cafe.onclick = () => info.innerHTML = "☕ Campus Café – fresh coffee, pastries, and free Wi-Fi.";
    }
  },
  cssStylesDemo: {
    title: "CSS Methodology Showcase",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>CSS Types Demo</h3>
          <p style="color:#7f8954; font-weight:bold;">[Inline CSS] This is inline styled.</p>
          <div class="internal-block" style="background:#2e3b36; padding:10px; border-radius:12px;"><p id="internalP">Internal CSS: this text is styled via style tag inside modal.</p></div>
          <button id="extHint">Simulate External CSS</button>
          <style>
            .internal-block p { color: #9eaba3; font-size:1rem; }
          </style>
        </div>
      `;
      const extBtn = container.querySelector('#extHint');
      if(extBtn) extBtn.onclick = () => alert('External CSS concept: global style.css changes fonts/colors site-wide.');
    }
  },
  keyframeAnimDemo: {
    title: "CSS Motion Design",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <style>
            @keyframes slideGlow { 0% { opacity:0; transform:translateY(-30px); } 100% { opacity:1; transform:translateY(0); } }
            @keyframes glowPulse { from { text-shadow:0 0 2px #7f8954; } to { text-shadow:0 0 12px #545b33; } }
            .anim-card { animation:slideGlow 0.7s ease; background:#38443f; padding:20px; border-radius:24px; }
            .glow-text { animation:glowPulse 1.8s infinite alternate; }
          </style>
          <div class="anim-card"><h3 class="glow-text">Student Card (Animated)</h3><p>Name: Alice Chen | Course: B.Tech AI | Grade: A</p></div>
        </div>
      `;
    }
  },
  jsValidationForm: {
    title: "Robust Form Validation",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Registration Form Validation</h3>
          <form id="regValidForm">
            <input type="text" id="fnameVal" placeholder="First Name (>=6 letters)"><br>
            <input type="text" id="lnameVal" placeholder="Last Name"><br>
            <input type="password" id="pwdVal" placeholder="Password min 6"><br>
            <input type="email" id="emailVal" placeholder="Email"><br>
            <input type="text" id="mobileVal" placeholder="Mobile 10 digits"><br>
            <textarea id="addrVal" placeholder="Address"></textarea><br>
            <button type="submit">Submit</button>
          </form>
        </div>
      `;
      const form = container.querySelector('#regValidForm');
      form.onsubmit = (e) => {
        e.preventDefault();
        let fname = container.querySelector('#fnameVal').value;
        let lname = container.querySelector('#lnameVal').value;
        let pwd = container.querySelector('#pwdVal').value;
        let email = container.querySelector('#emailVal').value;
        let mobile = container.querySelector('#mobileVal').value;
        let addr = container.querySelector('#addrVal').value;
        if (!/^[A-Za-z]{6,}$/.test(fname)) { alert('First name must contain alphabets and min 6 characters'); return; }
        if (lname.trim() === '') { alert('Last Name cannot be empty'); return; }
        if (pwd.length < 6) { alert('Password must be at least 6 characters'); return; }
        if (!/^[^\s@]+@([^\s@.,]+\.)+[^\s@]{2,}$/.test(email)) { alert('Enter valid email (name@domain.com)'); return; }
        if (!/^\d{10}$/.test(mobile)) { alert('Mobile number must contain exactly 10 digits'); return; }
        if (addr.trim() === '') { alert('Address cannot be empty'); return; }
        alert('Form Validated Successfully!');
      };
    }
  },
  popupSubmitDemo: {
    title: "Instant User Feedback",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Popup on Submit</h3>
          <form id="popupForm">
            <input placeholder="Any field"><br>
            <button type="submit">Submit</button>
          </form>
          <p>Click submit → alert "Form Submitted"</p>
        </div>
      `;
      const form = container.querySelector('#popupForm');
      form.onsubmit = (e) => { e.preventDefault(); alert('Form Submitted'); };
    }
  },
  mouseEventsDemo: {
    title: "Dynamic UI Interactivity",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Mouse Events Demo</h3>
          <div id="mouseBox" style="width:250px; padding:50px; background:#38443f; text-align:center; border-radius:30px; cursor:pointer;">Hover or click me</div>
          <p id="mouseMsg"></p>
        </div>
      `;
      const box = container.querySelector('#mouseBox');
      const msg = container.querySelector('#mouseMsg');
      box.onmouseover = () => { box.style.background = '#545b33'; msg.innerHTML = 'Mouse Over Event Triggered'; };
      box.onmouseout = () => { box.style.background = '#38443f'; msg.innerHTML = 'Mouse Out Event Triggered'; };
      box.onclick = () => { msg.innerHTML = 'Mouse Click Event Triggered'; };
    }
  },
  numberToWordsDemo: {
    title: "Utility Micro‑app",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Convert Number to Words</h3>
          <input type="text" id="numInput" placeholder="Enter number (0-999)"><br>
          <button id="convertBtn">Convert</button>
          <h4 id="wordOut"></h4>
        </div>
      `;
      const ones = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
      const teens = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
      const tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
      const toWords = (n) => {
        if (n === 0) return "Zero";
        let word = "";
        if (n >= 100) { word += ones[Math.floor(n/100)] + " Hundred "; n %= 100; }
        if (n >= 10 && n <= 19) { word += teens[n-10]; n = 0; }
        else if (n >= 20) { word += tens[Math.floor(n/10)] + " "; n %= 10; }
        if (n > 0) word += ones[n];
        return word.trim();
      };
      const btn = container.querySelector('#convertBtn');
      const input = container.querySelector('#numInput');
      const output = container.querySelector('#wordOut');
      btn.onclick = () => {
        let val = input.value;
        if (!/^\d+$/.test(val) || val.length > 3 || parseInt(val) > 999) {
          alert('Only digits 0-999 allowed');
          return;
        }
        output.innerText = toWords(parseInt(val));
      };
    }
  },
  employeeObjDemo: {
    title: "Object‑Oriented Data Dashboard",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Employee Details</h3>
          <button id="loadEmp">Display Employees</button>
          <button id="calcSalary">Total Salary Expenditure</button>
          <table border="1" id="empTable" style="margin-top:15px;"><tr><th>ID</th><th>Name</th><th>Designation</th><th>Salary</th></tr></table>
          <div id="totalSalaryDiv"></div>
        </div>
      `;
      const employees = [
        {id:101, name:"Arun", desig:"Manager", salary:50000},
        {id:102, name:"Divya", desig:"Developer", salary:40000},
        {id:103, name:"Karthik", desig:"Tester", salary:30000}
      ];
      const table = container.querySelector('#empTable');
      const loadBtn = container.querySelector('#loadEmp');
      const salaryBtn = container.querySelector('#calcSalary');
      const totalDiv = container.querySelector('#totalSalaryDiv');
      let loaded = false;
      loadBtn.onclick = () => {
        if (loaded) return;
        employees.forEach(emp => {
          let row = table.insertRow();
          row.insertCell(0).innerHTML = emp.id;
          row.insertCell(1).innerHTML = emp.name;
          row.insertCell(2).innerHTML = emp.desig;
          row.insertCell(3).innerHTML = emp.salary;
        });
        loaded = true;
      };
      salaryBtn.onclick = () => {
        let total = employees.reduce((sum, e) => sum + e.salary, 0);
        totalDiv.innerHTML = "Total Salary Expenditure: ₹" + total;
      };
    }
  },
  ajaxTextFetch: {
    title: "AJAX Data Integration",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Fetch Student Data from Text File</h3>
          <button id="fetchText">Load data/students.txt</button>
          <pre id="textResult" style="background:#1e2a26; padding:12px; margin-top:15px;"></pre>
        </div>
      `;
      const btn = container.querySelector('#fetchText');
      const pre = container.querySelector('#textResult');
      btn.onclick = async () => {
        try {
          const res = await fetch('data/students.txt');
          if (!res.ok) throw new Error();
          const text = await res.text();
          pre.innerText = text;
        } catch (err) {
          pre.innerText = 'Error loading text file. Make sure data/students.txt exists.';
        }
      };
    }
  },
  jsonFetchDemo: {
    title: "JSON‑Driven Content",
    render: (container) => {
      container.innerHTML = `
        <div class="demo-container">
          <h3>Fetch Student Records from JSON</h3>
          <button id="fetchJSON">Load data/students.json</button>
          <div id="jsonResult" style="margin-top:15px;"></div>
        </div>
      `;
      const btn = container.querySelector('#fetchJSON');
      const resultDiv = container.querySelector('#jsonResult');
      btn.onclick = async () => {
        try {
          const res = await fetch('data/students.json');
          if (!res.ok) throw new Error();
          const data = await res.json();
          let html = '<table border="1"><tr><th>ID</th><th>Name</th><th>Course</th></tr>';
          data.forEach(s => { html += `<tr><td>${s.id}</td><td>${s.name}</td><td>${s.course}</td></tr>`; });
          html += '</table>';
          resultDiv.innerHTML = html;
        } catch (err) {
          resultDiv.innerHTML = 'JSON load error. Place data/students.json in the data folder.';
        }
      };
    }
  }
};

// Project cards list (clean titles, no emojis)
const projectsList = [
  { demoId: "studentListsTable", title: "Structured Data UI", desc: "Clean presentation of ordered/unordered lists and tables" },
  { demoId: "bookstoreDemo", title: "E‑Commerce Frame Simulation", desc: "Catalogue, login, register flow in a mock store" },
  { demoId: "iframeImageDemo", title: "Dynamic Media Embedding", desc: "Iframe image loader with interactive controls" },
  { demoId: "studentFormDemo", title: "Lead Collection Form", desc: "Client‑side data capture with simulated submission" },
  { demoId: "mapHotspotDemo", title: "Interactive Map with Hotspots", desc: "Real Google Map + clickable image map on a real map image" },
  { demoId: "cssStylesDemo", title: "CSS Methodology Showcase", desc: "Inline, internal & external styling techniques" },
  { demoId: "keyframeAnimDemo", title: "CSS Motion Design", desc: "Slide‑in card with continuous glow animation" },
  { demoId: "jsValidationForm", title: "Robust Form Validation", desc: "Full‑featured validation (name, email, password, phone)" },
  { demoId: "popupSubmitDemo", title: "Instant User Feedback", desc: "Alert on form submission for UX clarity" },
  { demoId: "mouseEventsDemo", title: "Dynamic UI Interactivity", desc: "Hover, click, and leave events with style changes" },
  { demoId: "numberToWordsDemo", title: "Utility Micro‑app", desc: "Convert numbers 0‑999 to English words" },
  { demoId: "employeeObjDemo", title: "Object‑Oriented Dashboard", desc: "Employee array, table display, total salary calc" },
  { demoId: "ajaxTextFetch", title: "AJAX Data Integration", desc: "Fetch and display .txt file without page reload" },
  { demoId: "jsonFetchDemo", title: "JSON‑Driven Content", desc: "Load and render structured JSON data dynamically" }
];

function loadProjectCards() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  projectsList.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<i class="fas fa-flask"></i><h3>${proj.title}</h3><p>${proj.desc}</p><div class="demo-badge">Launch Demo →</div>`;
    card.addEventListener('click', () => openModal(proj.demoId));
    grid.appendChild(card);
  });
}

function openModal(demoId) {
  const modal = document.getElementById('demoModal');
  const contentDiv = document.getElementById('modalDynamicContent');
  const exp = experiments[demoId];
  if (exp) {
    contentDiv.innerHTML = '';
    exp.render(contentDiv);
  } else {
    contentDiv.innerHTML = '<p>Demo not found.</p>';
  }
  modal.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
  loadProjectCards();
  const modal = document.getElementById('demoModal');
  const closeSpan = document.querySelector('.close-modal');
  closeSpan.onclick = () => modal.style.display = 'none';
  window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
});