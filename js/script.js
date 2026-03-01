function toggleTheme() {
            const body = document.body;
            body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-toggle i');
            if(body.classList.contains('light-theme')){ icon.classList.replace('fa-sun', 'fa-moon'); } 
            else { icon.classList.replace('fa-moon', 'fa-sun'); }
        }

        function agendarWhatsApp() {
            const nome = document.getElementById('clientName').value;
            const idade = document.getElementById('clientAge').value;
            const servico = document.getElementById('serviceSelect').value;
            const obs = document.getElementById('clientObs').value;
            const data = document.getElementById('dateSelect').value;
            const hora = document.getElementById('timeSelect').value;
            
            if(!nome || !idade || !servico) { alert("Por favor, preencha os campos obrigatórios (Nome, Idade e Serviço)."); return; }
            
            const dataF = data ? new Date(data).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) : 'A combinar';
            const obsText = obs ? obs : 'Nenhuma';
            const msg = `Olá Isahías! Tenho interesse no treino:%0A%0A*Aluno:* ${nome}%0A*Idade:* ${idade} anos%0A*Interesse:* ${servico}%0A*Previsão:* ${dataF} - ${hora}%0A*Observações:* ${obsText}`;
            window.open(`https://wa.me/553299404076?text=${msg}`, '_blank');
        }

        function scrollTrack(elementId, dir) {
            const container = document.getElementById(elementId);
            container.scrollBy({ left: dir * 270, behavior: 'smooth' });
        }

        function toggleShareDropdown() {
            const dropdown = document.getElementById('shareDropdown');
            dropdown.classList.toggle('active');
            const btn = document.querySelector('.share-toggle');
            btn.setAttribute('aria-expanded', dropdown.classList.contains('active'));
        }

        // Close dropdown when clicking outside
        window.onclick = function(event) {
            if (!event.target.closest('.share-container')) {
                const dropdowns = document.getElementsByClassName("share-dropdown");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('active')) {
                        openDropdown.classList.remove('active');
                        document.querySelector('.share-toggle').setAttribute('aria-expanded', 'false');
                    }
                }
            }
        }

        function shareTo(platform) {
            const currentUrl = encodeURIComponent(window.location.href);
            const title = encodeURIComponent("Conheça a consultoria de Isahías Silva - Personal Trainer!");
            
            let shareUrl = "";

            if(platform === 'whatsapp') {
                shareUrl = `https://api.whatsapp.com/send?text=${title} ${currentUrl}`;
                window.open(shareUrl, '_blank');
            } 
            else if(platform === 'facebook') {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
                window.open(shareUrl, '_blank', 'width=600,height=400');
            } 
            else if(platform === 'twitter') {
                shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${currentUrl}`;
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
            else {
                // Instagram and Tiktok do not have direct web share URLs like Facebook. 
                // We fallback to copying the link to clipboard.
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert("Link copiado! Cole no seu " + platform.charAt(0).toUpperCase() + platform.slice(1) + " para compartilhar.");
                }).catch(err => {
                    console.error("Erro ao copiar link: ", err);
                });
            }
        }