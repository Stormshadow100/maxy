<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Function to animate elements with fade-in
        function animateElements() {
            // Select elements you want to animate
            const elementsToAnimate = document.querySelectorAll('.animate-me');

            // Iterate through each element and apply the animation
            elementsToAnimate.forEach(function(element, index) {
                anime({
                    targets: element,
                    opacity: [0, 1], // Fade-in animation
                    translateY: [20, 0], // You can add more properties for different animations
                    easing: 'easeInOutQuad',
                    duration: 800, // Animation duration in milliseconds
                    delay: index * 200, // Delay each element for a staggered effect
                });
            });
        }

        // Call the animateElements function when the page is loaded
        animateElements();
    });
</script>
