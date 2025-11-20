let arr = [
  {
    "fullName": "Aisha Khan",
    "image": "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "profession": "Frontend Developer",
    "description": "Aisha creates beautiful, responsive web interfaces and loves working with modern JavaScript frameworks.",
    "tags": ["JavaScript", "React", "HTML", "CSS", "UI"]
  },
  {
    "fullName": "Rohan Mehta",
    "image": "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "profession": "Data Analyst",
    "description": " data Rohan transforms complex datasets into simple insights. Skilled in Python, SQL and visualization.",
    "tags": ["Python", "SQL", "Data", "Analytics", "PowerBI"]
  },
  {
    "fullName": "Priya Singh",
    "image": "https://images.unsplash.com/photo-1713947506170-f9c01bcf7be7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "profession": "UX/UI Designer",
    "description": "Priya designs intuitive digital products with deep focus on user research and visual clarity.",
    "tags": ["Figma", "Prototyping", "UX", "UI", "Wireframing"]
  },
  {
    "fullName": "Vikram Patel",
    "image": "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "profession": "Backend Engineer",
    "description": "Vikram builds scalable backend systems and APIs, specializing in Node.js and database design.",
    "tags": ["Node.js", "API", "MongoDB", "PostgreSQL", "Architecture"]
  },
  {
    "fullName": "Sara Lopez",
    "image": "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "profession": "Product Manager",
    "description": "Sara leads cross-functional teams, turning user needs into focused product features.",
    "tags": ["Agile", "Scrum", "Leadership", "Product Strategy", "Roadmaps"]
  }
] ;
let sum = '';
arr.forEach(function(dtls){
    sum = sum + ` <div class="card">
            <img src="${dtls.image}"
                alt="">

            <div class="info">
                <h1>${dtls.fullName}</h1>
                <h4>${dtls.profession}</h4>
                <p>${dtls.description}</p>
                <button>${dtls.tags[0]}</button>
                <button>${dtls.tags[1]}</button>
                <button>${dtls.tags[2]}</button>
                <button>${dtls.tags[3]}</button>
                <button>${dtls.tags[4]}</button>
            </div>

        </div>`
})

let main = document.querySelector("main");

main.innerHTML = sum;
