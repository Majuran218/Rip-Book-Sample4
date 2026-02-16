// Main JavaScript for RipBook - Simple human interactions

document.addEventListener('DOMContentLoaded', function() {
    // Simple photo upload preview for memorial creation
    const uploadArea = document.getElementById('uploadArea');
    const photoUpload = document.getElementById('photoUpload');
    const photoPreview = document.getElementById('photoPreview');
    
    if (uploadArea && photoUpload) {
        uploadArea.addEventListener('click', () => {
            photoUpload.click();
        });
        
        photoUpload.addEventListener('change', function(e) {
            // Simple preview logic
            photoPreview.innerHTML = '';
            
            for (let i = 0; i < Math.min(this.files.length, 10); i++) {
                const file = this.files[i];
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.classList.add('preview-thumb');
                    photoPreview.appendChild(img);
                }
                
                reader.readAsDataURL(file);
            }
            
            // Update upload area text
            if (this.files.length > 0) {
                uploadArea.innerHTML = `<i class="fas fa-check-circle"></i>
                                       <p>${this.files.length} photo(s) selected</p>
                                       <small>Click to change</small>`;
                uploadArea.style.borderColor = '#2a9d8f';
                uploadArea.style.backgroundColor = '#f0fff4';
            }
        });
    }
    
    // Theme selection
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all
            themeOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked
            this.classList.add('active');
            
            // Show simple confirmation
            const themeName = this.querySelector('p').textContent;
            console.log(`Selected theme: ${themeName}`);
        });
    });
    
    // Continue to payment button
    const continueBtn = document.getElementById('continueToPayment');
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            // Simple form validation
            const nameField = document.getElementById('name');
            
            if (!nameField.value.trim()) {
                alert('Please enter the name of your loved one');
                nameField.focus();
                return;
            }
            
            // If validation passes, redirect to pricing
            window.location.href = 'pricing.html';
        });
    }
    
    // Plan selection
    const planButtons = document.querySelectorAll('.btn-plan');
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simple visual feedback
            planButtons.forEach(btn => {
                btn.textContent = btn.textContent.replace('Selected', 'Select');
                btn.style.backgroundColor = '';
            });
            
            this.textContent = this.textContent.replace('Select', 'Selected');
            this.style.backgroundColor = '#2a9d8f';
            
            // Show simple payment modal
            const planTitle = this.closest('.plan-card').querySelector('h3').textContent;
            const planPrice = this.closest('.plan-card').querySelector('.price').textContent;
            
            setTimeout(() => {
                alert(`Thank you for selecting the ${planTitle} plan (${planPrice}). You'll be redirected to secure checkout.`);
                // In a real app, this would redirect to payment gateway
            }, 500);
        });
    });
    
    // Simple memorial example
    const viewExampleBtn = document.querySelector('.btn-outline');
    if (viewExampleBtn && viewExampleBtn.textContent.includes('Example')) {
        viewExampleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("This would show a sample memorial page. For now, we'll create a simple preview.");
            
            // Create a simple modal with example
            const exampleModal = document.createElement('div');
            exampleModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            `;
            
            exampleModal.innerHTML = `
                <div style="background: white; padding: 30px; border-radius: 10px; max-width: 500px; text-align: center;">
                    <h2>Sample Memorial Page</h2>
                    <p>This is how a memorial page would look. It would include:</p>
                    <ul style="text-align: left; margin: 20px 0;">
                        <li>Beautiful header with name and dates</li>
                        <li>Photo gallery</li>
                        <li>Life story section</li>
                        <li>Guestbook for visitors to leave messages</li>
                        <li>Optional background music</li>
                    </ul>
                    <button id="closeExample" style="padding: 10px 20px; background: #4a6fa5; color: white; border: none; border-radius: 4px; cursor: pointer;">Close Preview</button>
                </div>
            `;
            
            document.body.appendChild(exampleModal);
            
            document.getElementById('closeExample').addEventListener('click', function() {
                document.body.removeChild(exampleModal);
            });
        });s
    }
});