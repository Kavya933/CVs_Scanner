console.log("This is js heyyy1");

const data = [
    {
        name: 'kavya',
        age:22,
        city:'jnk',
        language:'java',
        framework:'javas',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },

    {
        name: 'camilio',
        age:22,
        city:'loss angles',
        language:'javaScript',
        framework:'Angular js',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    },
    {
        name: 'Dikxa',
        age:10,
        city:'pokhara',
        language:'python',
        framework:'flask',
        image: 'https://randomuser.me/api/portraits/women/79.jpg'
    },

    {
        name: 'shivam',
        age:20,
        city:'chitwan',
        language:'c++',
        framework:'Django',
        image: 'https://randomuser.me/api/portraits/men/73.jpg'
    },

    {
        name: 'Abhi',
        age:22,
        city:'kathmandu',
        language:'java',
        framework:'javas',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },

    {
        name: 'kasmira',
        age:22,
        city:'Jnk',
        language:'Java',
        framework:'React',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    }
]


//iterator for iterating above data
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}

const candidates = cvIterator(data);
nextCV();
//making button responsive
let next = document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){

    image.innerHTML = `<img src = '${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">Place: ${currentCandidate.city}</li>
    <li class="list-group-item">Language: ${currentCandidate.language}</li>
    <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
    
  </ul>`;
    }
    else{
        alert('End of applications');
        window.location.reload();
    }
 }