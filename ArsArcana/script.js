// --- DATA ---
const stepData = [
    { id: 1, title: "Gesture", color: "#4ade80", colorClass: "green", objective: "Capture the core energy, rhythm, and flow of the pose in a single, fluid line." },
    { id: 2, title: "Rough Sketch", color: "#4ade80", colorClass: "green", objective: "Build a 3D mannequin on your gesture line to establish volume, form, and perspective." },
    { id: 3, title: "Line Art", color: "#4ade80", colorClass: "green", objective: "Create the final, clean outline with intentional line weight to communicate light, depth, and form." },
    { id: 4, title: "Flat Colors", color: "#4ade80", colorClass: "green", objective: "Establish the base, local colors for every part of the drawing in a clean, organized way." },
    { id: 5, title: "Color Variation", color: "#facc15", colorClass: "yellow", objective: "Add subtle hue shifts to your flat colors to make them feel more organic, rich, and less digitally flat." },
    { id: 6, title: "Shadows", color: "#4ade80", colorClass: "green", objective: "Define the 3D form by adding shadows based on a consistent light source." },
    { id: 7, title: "Highlights", color: "#4ade80", colorClass: "green", objective: "Define the planes directly facing the light source to complete the illusion of form." },
    { id: 8, title: "Reflected Light", color: "#facc15", colorClass: "yellow", objective: "Add realism by showing light from the environment bouncing into the shadows." },
    { id: 9, title: "Color Line Art", color: "#f87171", colorClass: "red", objective: "Make the line art feel like a natural part of the painting, rather than a harsh black outline." },
    { id: 10, title: "Rim Light", color: "#f87171", colorClass: "red", objective: "Add a dramatic, crisp line of light to separate the character from the background." },
    { id: 11, title: "Post Processing", color: "#facc15", colorClass: "yellow", objective: "Apply final, image-wide adjustments to unify the atmosphere and add a last layer of professional polish." }
];

const stepContentHTML = {
    1: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Capture the core energy, rhythm, and flow of the pose in a single, fluid line. This is the foundation of a dynamic, non-stiff character and the single most important step for creating appealing poses.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">The Physical Skill:</span> Lock your wrist. The motion must come from your elbow or shoulder. This is not an artistic choice; it is the physical requirement for producing smooth, confident strokes.</p></div><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Diagnose the Action:</span> Identify the primary mechanical action of the torso: is it a <span class="text-amber-400">Forward/Backward Bend</span>, a <span class="text-amber-400">Side Bend</span>, or a <span class="text-amber-400">Twist</span>? Your line should represent that dominant force.</p></div><div class="flex items-start"><span class="stipulation-dot bg-red-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Philosophical Reminder:</span> A successful gesture feels alive. Its goal is not accuracy, but to capture the <strong><em>story</em></strong> of the pose. If you lose the energy here, no amount of rendering can bring it back. This step is about feeling, not thinking.</p></div></div>`,
    2: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Build a 3D mannequin on your gesture line to establish volume, form, and perspective. This is where you solve anatomical and structural problems before committing to final lines.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Use Simple Forms:</span> All complexity is built from simplicity. Use boxes, cylinders, and spheres to construct the body. This forces you to think in 3D, not flat shapes.</p></div><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Think Like a Sculptor:</span> Draw "through" your forms as if they were transparent. Add cross-contour lines that wrap around the surface to truly understand how they turn in space. This is the key to believable volume and the foundation for accurate shading later.</p></div><div class="flex items-start"><span class="stipulation-dot bg-red-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Fundamental Connection:</span> This step is the bridge between the energetic, right-brained "Gesture" and the analytical, left-brained "Line Art." It's where you translate the *feeling* of the pose into a believable *structure*.</p></div></div>`,
    3: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Create the final, clean outline with intentional line weight to communicate light, depth, and form. This is the "performance" after the "practice" of sketching.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Technique is Physical:</span> Use confident, single strokes ("pulling" lines). Use the "Ghosting" method (practicing the motion in the air first) to build muscle memory. Quick, smooth strokes are cleaner than slow, careful ones.</p></div><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Line Weight is Information:</span> It's not random. The rules are simple: <span class="text-amber-400">Thicker</span> lines for shadows, contact points, and objects closer to the camera. <span class="text-amber-400">Thinner</span> lines for areas hit by light. This adds immense depth before color is even applied.</p></div><div class="flex items-start"><span class="stipulation-dot bg-red-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">The "Fresh Eyes" Command:</span> Your brain gets used to your drawing and stops seeing mistakes. Flipping the canvas is the single most effective way to catch errors. It is not optional if you are serious about accuracy. It is a mandatory part of a professional workflow.</p></div></div>`,
    4: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Establish the base, local colors for every part of the drawing in a clean, organized way. A clean flatting stage makes the rendering process 10x easier.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Limited Palette is Key:</span> This is where you enforce cohesion. Force yourself to choose only 3-5 main colors based on a clear harmony (e.g., Triadic, Split-Complementary). This prevents a chaotic, "weird" looking final piece.</p></div><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Technical Setup:</span> Set your Line Art layer to 'Reference' mode (or your software's equivalent). Create a new layer underneath it for your colors. This allows your fill tool to use the line art as a boundary.</p></div><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Isolate Your Colors:</span> For maximum flexibility, put different color areas on separate layers (e.g., a layer for skin, hair, clothes). This non-destructive workflow makes them much easier to select and adjust later.</p></div></div>`,
    5: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Add subtle hue shifts to your flat colors to make them feel more organic, rich, and less digitally flat. This step introduces nuanced color variations that exist in real-world materials.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Technical Setup:</span> Lock the transparency of your flat color layer (or use a Clipping Mask). This lets you paint only on the existing colors without making a mess.</p></div><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Apply Subtle Gradients:</span> Use any large, soft-edged brush at a very low opacity (10-20%). Add analogous (neighboring) colors to your base. For a <span class="text-amber-400">blue</span> object, gently glaze in a hint of <span class="text-amber-400">cyan</span> or <span class="text-amber-400">purple</span>. This mimics how real-world materials are rarely one single, uniform color.</p></div><div class="flex items-start"><span class="stipulation-dot bg-red-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Philosophical Reminder:</span> Subtlety is everything. The goal is for the effect to be almost unnoticeable. It should create a soft, natural gradient that adds richness, not a bold, obvious color change. This step separates good coloring from great coloring.</p></div></div>`,
    6: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Define the 3D form by adding shadows based on a consistent light source. This is where you "sculpt" your flat shapes into solid objects.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Technical Workflow:</span> Create a new layer, clip it to your flats, and set the blend mode to 'Multiply'. This is the standard, non-destructive professional workflow for shadows.</p></div><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Use a Universal Shadow Color:</span> Do not shade with black or grey. Use one single, living shadow color (e.g., muted lavender, desaturated blue) for the entire piece. This ensures all shadows feel like they belong to the same light environment.</p></div><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Opacity is Intensity:</span> The darkness of your shadow is not controlled by the color you pick, but by the layer's opacity. A range of 40-70% is common. This is the key to soft, natural shading. Experiment with this slider to find the perfect value.</p></div></div>`,
    7: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Define the planes directly facing the light source to complete the illusion of form and make surfaces look like they are reacting to light.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Technical Workflow:</span> Create another clipped layer and set the blend mode. Use 'Screen' for soft, diffused light, or 'Add'/'Color Dodge' for intense, glowing highlights.</p></div><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Use a Universal Highlight Color:</span> Avoid pure white. Use a single color that reflects your light source (e.g., a pale yellow for sun, a light blue for moonlight).</p></div><div class="flex items-start"><span class="stipulation-dot bg-red-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Flexibility of Light:</span> Unlike shadows which are predictable, highlights are stylistic. You can use a hard brush for a cel-shaded look, or a soft brush for a painterly look. The type of brush, blend mode, and layer opacity you choose here is what defines your rendering style.</p></div></div>`,
    8: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Add realism by showing light from the environment bouncing into the shadows. Shadows in the real world are never black holes; they are filled with colored light.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Placement and Color:</span> Add this on a new 'Screen' or 'Add' layer, placed between your shadow and highlight layers (and clipped). Pick a light color from the environment (e.g., sand color, grass color).</p></div><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Technique:</span> Use a very soft, large brush at a very low opacity (10-20%). This should be a subtle effect that adds a hint of color to dark areas, making them feel less flat.</p></div><div class="flex items-start"><span class="stipulation-dot bg-red-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Fundamental Connection:</span> This step directly connects your character to their environment. It is the technique that makes a subject feel like it is *in* a scene, rather than just floating on top of it. It's a key ingredient for immersive art.</p></div></div>`,
    9: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Make the line art feel like a natural part of the painting, rather than a harsh black outline sitting on top of it. This softens the entire piece and enhances cohesion.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Technical Setup:</span> Go to your final Line Art layer and lock its transparency so you can easily recolor it without damaging the lines.</p></div><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Color Choice:</span> Use a large, soft brush to glaze over the lines with a harmonious dark color. A deep, desaturated red or a dark purple often works better than pure black and feels more integrated with skin tones.</p></div><div class="flex items-start"><span class="stipulation-dot bg-red-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Flexibility of Style:</span> This is a stylistic choice. Some styles (like comics or cartoons) rely on strong black line art. Other styles (painterly, semi-realism) benefit greatly from this softening effect. Don't feel obligated to color your lines if it doesn't serve the style you're aiming for.</p></div></div>`,
    10: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Add a dramatic, crisp line of light to separate the character from the background and create a stylized, high-energy look.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-green-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Placement and Blend Mode:</span> Use a new layer on top of everything, set to 'Add' or 'Color Dodge' for an intense glow. Draw a thin, bright line on the absolute edges of the form that are directly facing a secondary light source.</p></div><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Consider the Story:</span> A rim light implies a very strong backlight. While not realistic for every scene, it can add a cinematic feel. For example, a blue rim light can suggest moonlight, while a red one can suggest a fire or explosion.</p></div><div class="flex items-start"><span class="stipulation-dot bg-red-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Philosophical Reminder:</span> This effect is purely stylistic and not realistic. It is a tool for drama and visual excitement. Overuse can look cheap, but when used sparingly on a key character, it can be extremely effective at creating a "cool factor."</p></div></div>`,
    11: `<p class="text-slate-200 mb-6"><span class="text-2xl font-bold text-slate-300">Objective:</span> Apply final, image-wide adjustments to unify the atmosphere, correct colors, and add a last layer of professional polish.</p><div class="space-y-4"><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">The Unifying Color Glaze:</span> Create a new layer on top of everything. Fill it with a single color that represents the overall mood (e.g., soft orange for a sunset), set to 'Overlay' or 'Soft Light', and lower the opacity to a very subtle 5-20%. This ties all the disparate colors together.</p></div><div class="flex items-start"><span class="stipulation-dot bg-yellow-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">Subtle Effects:</span> Use your software's Adjustments menu to add final effects. A small amount of 'Noise' can add a nice texture. 'Chromatic Aberration' can create a cool, photographic feel. 'Bloom' can make your highlights glow. The key is to keep these effects extremely subtle.</p></div><div class="flex items-start"><span class="stipulation-dot bg-red-400 mt-2"></span><p><span class="text-xl font-semibold text-slate-400">The Final Quality Check:</span> This is a non-negotiable step. Before you export, do one last Squint Test to check your values and one last Horizontal Flip to check your composition. This is your last chance to catch any mistakes and ensure your piece is as strong as it can be. This is the mark of a professional.</p></div></div>`
};

const stepColorClasses = { green: 'text-green-400', yellow: 'text-yellow-400', red: 'text-red-400' };
const stepBgClasses = { green: 'bg-green-400/20', yellow: 'bg-yellow-400/20', red: 'bg-red-400/20' };

let currentStep = 0;
let timelineInitialized = false;

// --- ACCORDION ---
function toggleStep(header) {
    const content = header.nextElementSibling;
    const allContent = document.querySelectorAll('.step-content.open');
    allContent.forEach(openContent => {
        if (openContent !== content) {
            openContent.classList.remove('open');
            openContent.previousElementSibling.classList.remove('open');
        }
    });
    content.classList.toggle('open');
    header.classList.toggle('open');
}

function scrollToCurrentStep() {
    const targetId = `step-${currentStep + 1}`;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const yOffset = -80;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        const header = targetElement.querySelector('.step-header');
        const content = header.nextElementSibling;
        if (!content.classList.contains('open')) {
           setTimeout(() => toggleStep(header), 400); 
        }
    }
}

// --- TIMELINE ---
function initializeProcessTimeline() {
    // Populate content for the Process page
    const phase1Content = document.getElementById('phase-1-content');
    const phase2Content = document.getElementById('phase-2-content');
    const phase3Content = document.getElementById('phase-3-content');
    
    // Check if the content is being loaded into the DOM (i.e. if we are on process.html)
    if (!phase1Content) return; 

    for(let i=1; i<=11; i++){
        const step = stepData[i-1];
        let container = null;
        if (i <= 3) container = phase1Content;
        else if (i <= 8) container = phase2Content;
        else container = phase3Content;

        if (container && container.children.length < (i <= 3 ? 3 : (i <= 8 ? 5 : 3))) { // Simple check to prevent duplicate appending if called multiple times
            const stepEl = document.createElement('div');
            stepEl.id = `step-${i}`;
            stepEl.className = 'rounded-lg shadow-lg';
            stepEl.innerHTML = `
                <div class="step-header flex justify-between items-center p-6 rounded-lg" onclick="toggleStep(this)">
                    <div class="flex items-center">
                        <span class="text-5xl font-extrabold ${stepColorClasses[step.colorClass]} mr-6">${i}</span>
                        <h3 class="text-3xl font-bold text-white">${step.title}</h3>
                    </div>
                    <div class="arrow text-slate-400 text-3xl">▶</div>
                </div>
                <div class="step-content px-6 rounded-b-lg text-lg">
                    ${stepContentHTML[i]}
                </div>
            `;
            container.appendChild(stepEl);
        }
    }

    const timelineContainer = document.getElementById('timeline-container');
    const pointsContainer = document.getElementById('timeline-points-container');
    const numbersContainer = document.getElementById('timeline-numbers');
    const playhead = document.getElementById('playhead');
    const timelineTitle = document.getElementById('timeline-title');
    const timelineTitleBox = document.getElementById('timeline-title-box');
    const timelineObjective = document.getElementById('timeline-objective');
    
    // Clear containers before populating (important for modular loading)
    if (pointsContainer && pointsContainer.children.length === 0) {
        let points = [];
        
        for (let i = 0; i < 11; i++) {
            const step = stepData[i];
            const point = document.createElement('div');
            point.className = 'timeline-point';
            point.style.backgroundColor = step.color;
            point.dataset.index = i;
            pointsContainer.appendChild(point);
            points.push(point);
            const number = document.createElement('span');
            number.textContent = i + 1;
            number.className = 'w-[calc(100%/11)] text-center';
            numbersContainer.appendChild(number);
        }

        let isDragging = false;

        function updateDisplay(index) {
            currentStep = index;
            const data = stepData[index];
            timelineTitle.textContent = data.title;
            timelineObjective.textContent = data.objective;
            timelineTitle.className = `text-3xl font-bold ${stepColorClasses[data.colorClass]}`;
            timelineTitleBox.className = `inline-block px-6 py-2 rounded-lg mb-3 transition-colors duration-300 ${stepBgClasses[data.colorClass]}`;
        }

        function snapPlayhead(xPosition) {
            if(!timelineContainer) return;
            const containerRect = timelineContainer.getBoundingClientRect();
            const relativeX = xPosition - containerRect.left;
            let closestPointIndex = 0;
            let minDistance = Infinity;
            points.forEach((point, index) => {
                const pointRect = point.getBoundingClientRect();
                // Check if rect is available (component might be hidden/off-screen)
                if (pointRect.width === 0) return; 

                const pointCenter = pointRect.left - containerRect.left + (pointRect.width / 2);
                const distance = Math.abs(relativeX - pointCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestPointIndex = index;
                }
            });
            const closestPoint = points[closestPointIndex];
            const closestPointRect = closestPoint.getBoundingClientRect();
            const newLeft = closestPointRect.left - containerRect.left + (closestPointRect.width / 2);
            playhead.style.left = `${newLeft}px`;
            updateDisplay(closestPointIndex);
        }
        
        playhead.addEventListener('mousedown', (e) => { isDragging = true; playhead.style.transition = 'none'; });
        playhead.addEventListener('touchstart', (e) => { isDragging = true; playhead.style.transition = 'none'; }, { passive: true });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                if (!timelineContainer) return;
                const containerRect = timelineContainer.getBoundingClientRect();
                let newX = e.clientX - containerRect.left;
                newX = Math.max(0, Math.min(newX, containerRect.width));
                playhead.style.left = `${newX}px`;
            }
        });

         window.addEventListener('touchmove', (e) => {
            if (isDragging) {
                if (!timelineContainer) return;
                const containerRect = timelineContainer.getBoundingClientRect();
                let newX = e.touches[0].clientX - containerRect.left;
                newX = Math.max(0, Math.min(newX, containerRect.width));
                playhead.style.left = `${newX}px`;
            }
        }, { passive: true });

        window.addEventListener('mouseup', (e) => {
            if(isDragging) {
                isDragging = false;
                playhead.style.transition = 'left 0.2s ease-in-out';
                snapPlayhead(e.clientX);
            }
        });
        
         window.addEventListener('touchend', (e) => {
            if(isDragging) {
                isDragging = false;
                playhead.style.transition = 'left 0.2s ease-in-out';
                const lastTouch = e.changedTouches[0];
                snapPlayhead(lastTouch.clientX);
            }
        });

        points.forEach(point => {
            point.addEventListener('click', () => {
                const index = parseInt(point.dataset.index);
                const containerRect = timelineContainer.getBoundingClientRect();
                const pointRect = point.getBoundingClientRect();
                const newLeft = pointRect.left - containerRect.left + (pointRect.width / 2);
                playhead.style.transition = 'left 0.2s ease-in-out';
                playhead.style.left = `${newLeft}px`;
                updateDisplay(index);
            });
        });

        function initialize() {
            const firstPoint = points[0];
            if (!firstPoint || !timelineContainer) return;
            const containerRect = timelineContainer.getBoundingClientRect();
            if (containerRect.width > 0) {
                const firstPointRect = firstPoint.getBoundingClientRect();
                const initialLeft = firstPointRect.left - containerRect.left + (firstPointRect.width / 2);
                playhead.style.left = `${initialLeft}px`;
                updateDisplay(0);
            } else {
                setTimeout(initialize, 50);
            }
        }
        
        initialize();
        window.addEventListener('resize', initialize);
    }
}

// --- UTILITY FUNCTIONS ---

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// --- INITIALIZATION ---
// Only initialize the timeline if we are on the process.html page.
document.addEventListener('DOMContentLoaded', () => {
    // Check if the unique ID for the timeline exists, indicating we are on process.html
    if (document.getElementById('timeline-container')) {
        initializeProcessTimeline();
    }
});