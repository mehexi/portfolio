const customCursor = document.querySelector('.custom-cursor')

const eventTargets = document.querySelectorAll('.event-target')

    document.addEventListener('mousemove', function (e) {
        setTimeout(function () {
            customCursor.style.left = e.clientX + 'px'
        customCursor.style.top = e.clientY + 'px'
            
        
        }, 10)

    })

eventTargets.forEach(function (eventTarget) {
    eventTarget.addEventListener('mouseenter', function () {
        customCursor.style.transition = 'transform 0.3s ease'
        customCursor.style.transform = 'scale(3)'
        customCursor.classList.remove('bg-white')
        customCursor.classList.add( 'border')
        
        
    })
    eventTarget.addEventListener('mouseleave', function () {
        customCursor.style.transform = 'scale(1)'
        customCursor.classList.remove('bg-black/30,backdrop-blur-sm')
        customCursor.classList.add('bg-white')
        customCursor.classList.remove('bg-white/30')
    })
})


// cursor end

document.getElementById('according-1').addEventListener('click', function () {
    const accordingData = document.getElementById('according-1-data')
    accordingData.style.transition = 'transform 0.3s ease'
    accordingData.classList.toggle('hidden')
})
document.getElementById('according-2').addEventListener('click', function () {
    const accordingData = document.getElementById('according-2-data')
    accordingData.style.transition = 'transform 0.3s ease'
    accordingData.classList.toggle('hidden')
})
document.getElementById('according-3').addEventListener('click', function () {
    const accordingData = document.getElementById('according-3-data')
    accordingData.style.transition = 'transform 0.3s ease'
    accordingData.classList.toggle('hidden')
})

const heroSection = document.getElementById('hero-section');
const navigation = document.getElementById('nav');
const mehexiLogo = document.getElementById('mehexi-logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > heroSection.clientHeight) {
    // Add the background styles
      navigation.classList.add('bg-black/30', 'backdrop-blur-sm');
      mehexiLogo.classList.add('hidden')
  } else {
    // Remove the background styles
      navigation.classList.remove('bg-black/30', 'backdrop-blur-sm');
      mehexiLogo.classList.remove('hidden')
  }
});
