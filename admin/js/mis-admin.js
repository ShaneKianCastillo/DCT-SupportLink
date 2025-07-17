function blockUser() {
            Swal.fire({
            title: "Are you sure?",
            html: '<i class="ri-error-warning-line" style="font-size: 48px; color: red;"></i><p class="mt-2"><span class="fw-bold">Lawrence</span> will be blocked and not be able to submit any reports.</p>',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, block user!",
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Blocked!",
                text: "The user has been successfully blocked.",
                icon: "success"
                });
            }
            });
        }

        function toggleDropdown(event) {
        event.preventDefault();
        const parent = event.currentTarget.parentElement;
        const dropdown = parent.querySelector(".dropdown-links");
        dropdown.classList.toggle("d-none");
        }

        // IDs for all content sections you want to toggle
        const contentSections = [
        "userContent",
        "sentReports",
        "onProcessReports",
        "resolvedReports",
        "changePasswordContent"
        ];

        // Helper function to show the selected section and hide others
        function showSection(sectionId) {
        contentSections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
            section.style.display = id === sectionId ? "block" : "none";
            }
        });
        }

        // Hook up sidebar links to their target content
        document.addEventListener("DOMContentLoaded", () => {
        // Users
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
            const text = e.currentTarget.textContent.trim();

            switch (text) {
                case "Users":
                showSection("userContent");
                break;
                case "Sent Reports":
                showSection("sentReports");
                break;
                case "On Process":
                showSection("onProcessReports");
                break;
                case "Resolved":
                showSection("resolvedReports");
                break;
                case "Change Password":
                showSection("changePasswordContent");
                break;
            }
            });
        });
        });
