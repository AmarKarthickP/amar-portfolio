<template>
	<ion-content>

			<!-- Amar Karthick -->
			<div class="grid grid-cols-11 gap-4">
				<!-- Side Headers -->
				<div class="col-span-3 side-headers">
					<h4>Hello, I'm Amar Karthick 👋</h4>
					<h1>ERP & Frappe<br> Developer</h1>
				</div>
				<!-- Main Content -->
				<div class="col-span-8 flex items-center m-10 gap-10 main-content rounded-lg">
					<div class="image-container">
						<svg viewBox="0 0 500 600" class="svg-frame">
							<defs>
								<clipPath id="curvyShape">
									<path
										d="
											M 0 0
											H 380
											C 450 0, 500 60, 500 140
											V 460
											C 500 560, 420 600, 320 600
											H 0
											Z
										"
									/>
								</clipPath>
							</defs>

							<image
								href="@/assets/profile/amar-karthick.jpeg"
								width="500"
								height="600"
								clip-path="url(#curvyShape)"
								preserveAspectRatio="xMidYMid slice"
							/>
						</svg>
					</div>
					<div>
						<h2>ERP & Frappe Developer</h2>
						<p class="mt-3">I'm a software developer with 2 years of hands-on experience in <br>building scalable, efficient, and open-source ERP solutions using<br> Frappe and ERPNext</p>
						<div class="mt-4 flex gap-2.5">
							<ion-icon :icon="location" class="text-[#015fc9] h-5 w-5" />
							<span class="text-[#16243d]">Chennai, Tamil Nadu</span>
						</div>
						<div class="mt-1 flex gap-2.5">
							<ion-icon :icon="mail" class="text-[#015fc9] h-5 w-5" />
							<span class="text-[#16243d]">karthickpamar@gmail.com</span>
						</div>
						<div class="mt-1 flex gap-2.5">
							<ion-icon :icon="call" class="text-[#015fc9] h-5 w-5" />
							<span class="text-[#16243d]">+91 6369606405</span>
						</div>
						<!-- Social Media -->
						<div class="flex gap-8 mt-6">
							<a href="https://www.linkedin.com/in/amarkarthickp/" target="_blank" class="text-[#015fc9] h-5 w-5">
								<ion-icon :icon="logoLinkedin" class="text-[#015fc9] h-8 w-8 hover:text-[#16243d] transition ease-in-out duration-300" />
							</a>
							<a href="https://github.com/AmarKarthickP" target="_blank" class="text-[#015fc9] h-5 w-5">
								<ion-icon :icon="logoGithub" class="text-[#015fc9] h-8 w-8 hover:text-[#16243d] transition ease-in-out duration-300" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<hr class="" />

			<!-- About Me -->
			<div class="grid grid-cols-11 gap-4">
				<!-- Side Headers -->
				<div class="col-span-3 side-headers">
					<h4>About Me</h4>
					<h1>ERP & Frappe<br> Developer<br> since 2024</h1>
				</div>
				<!-- Main Content -->
				<div class="col-span-8 flex items-center m-10 gap-10 main-content">
					<div class="image-container">
						<svg viewBox="0 0 500 600" class="svg-frame">
							<defs>
								<clipPath id="curvyShape">
									<path
										d="
											M 0 0
											H 380
											C 450 0, 500 60, 500 140
											V 460
											C 500 560, 420 600, 320 600
											H 0
											Z
										"
									/>
								</clipPath>
							</defs>

							<image
								href="@/assets/profile/amar-karthick.jpeg"
								width="500"
								height="600"
								clip-path="url(#curvyShape)"
								preserveAspectRatio="xMidYMid slice"
							/>
						</svg>
					</div>
					<div>
						<h2>ERP & Frappe Developer</h2>
						<p class="mt-3">I'm a software developer with 2 years of hands-on experience in <br>building scalable, efficient, and open-source ERP solutions using<br> Frappe and ERPNext</p>
						<div class="mt-4 flex gap-2.5">
							<ion-icon :icon="location" class="text-[#015fc9] h-5 w-5" />
							<span class="text-[#16243d]">Chennai, Tamil Nadu</span>
						</div>
						<div class="mt-1 flex gap-2.5">
							<ion-icon :icon="mail" class="text-[#015fc9] h-5 w-5" />
							<span class="text-[#16243d]">karthickpamar@gmail.com</span>
						</div>
						<div class="mt-1 flex gap-2.5">
							<ion-icon :icon="call" class="text-[#015fc9] h-5 w-5" />
							<span class="text-[#16243d]">+91 6369606405</span>
						</div>
						<!-- Social Media -->
						<div class="flex gap-8 mt-6">
							<a href="https://www.linkedin.com/in/amarkarthickp/" target="_blank" class="text-[#015fc9] h-5 w-5">
								<ion-icon :icon="logoLinkedin" class="text-[#015fc9] h-8 w-8 hover:text-[#16243d] transition ease-in-out duration-300" />
							</a>
							<a href="https://github.com/amarkarthickp" target="_blank" class="text-[#015fc9] h-5 w-5">
								<ion-icon :icon="logoGithub" class="text-[#015fc9] h-8 w-8 hover:text-[#16243d] transition ease-in-out duration-300" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<hr class="" />

			<!-- Experience -->
			<div class="grid grid-cols-11 gap-4">
				<!-- Side Headers -->
				<div class="col-span-3 side-headers">
					<h4>Experience</h4>
					<h1>My real work<br> experience</h1>
				</div>
				<!-- Main Content -->
				<div class="col-span-8 items-center m-10 gap-10 main-content">
					<div class="bg-[#f2f5f9] rounded-md p-5 relative">
						<div class="flex">
							<p>TEAMPRO HR & IT Services</p>
							<ion-icon :icon="calendar" class="text-[#787878] mt-1 h-5 w-5 pl-5"></ion-icon>
							<p class="pl-1">Apr, 2024 to Present</p>
						</div>
						<h3>Junior Frappe / ERPNext Developer</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt fuga deserunt repudiandae provident excepturi quas, nobis quis, omnis illum quae. Dicta nesciunt odit magni eius cumque iure sapiente sunt.</p>
						<img class="absolute h-6 top-10 right-10" src="@/assets/experience/teampro.png" alt="teampro" />
					</div>
					<div class="bg-[#f2f5f9] rounded-md p-5 relative mt-7">
						<div class="flex">
							<p>Brassy Academy</p>
							<ion-icon :icon="calendar" class="text-[#787878] mt-1 h-5 w-5 pl-5"></ion-icon>
							<p class="pl-1">Jul 2023 - Aug 2023</p>
						</div>
						<h3>Web Developer Intern</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt fuga deserunt repudiandae provident excepturi quas, nobis quis, omnis illum quae. Dicta nesciunt odit magni eius cumque iure sapiente sunt.</p>
						<img class="absolute h-14 top-8 right-10" src="@/assets/experience/brassy-academy.png" alt="brassy-academy" />
					</div>
					<div class="bg-[#f2f5f9] rounded-md p-5 relative mt-7">
						<div class="flex">
							<p>G2G Technologies</p>
							<ion-icon :icon="calendar" class="text-[#787878] mt-1 h-5 w-5 pl-5"></ion-icon>
							<p class="pl-1">Jul 2022 - Aug 2022</p>
						</div>
						<h3>Workflow Designer</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt fuga deserunt repudiandae provident excepturi quas, nobis quis, omnis illum quae. Dicta nesciunt odit magni eius cumque iure sapiente sunt.</p>
						<img class="absolute h-10 top-8 right-10" src="@/assets/experience/g2g.webp" alt="g2g" />
					</div>
				</div>
			</div>
			<hr class="" />

			<!-- Education -->
			<div class="grid grid-cols-11 gap-4">
				<!-- Side Headers -->
				<div class="col-span-3 side-headers">
					<h4>Education</h4>
					<h1>My education<br> qualitfication</h1>
				</div>
				<!-- Main Content -->
				<div class="col-span-8 items-center m-10 gap-10 main-content">
					<div class="bg-[#f2f5f9] rounded-md p-5 relative">
						<div class="flex">
							<p>NxtWave (Online)</p>
							<ion-icon :icon="calendar" class="text-[#787878] mt-1 h-5 w-5 pl-5"></ion-icon>
							<p class="pl-1">2026</p>
						</div>
						<h3>Full Stack Development</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt fuga deserunt repudiandae provident excepturi quas, nobis quis, omnis illum quae. Dicta nesciunt odit magni eius cumque iure sapiente sunt.</p>
						<img class="absolute h-10 top-10 right-10" src="@/assets/education/nextwave-logo.png" alt="nxtwave" />
					</div>
					<div class="bg-[#f2f5f9] rounded-md p-5 relative mt-7">
						<div class="flex">
							<p>PET Engineering College</p>
							<ion-icon :icon="calendar" class="text-[#787878] mt-1 h-5 w-5 pl-5"></ion-icon>
							<p class="pl-1">2024</p>
						</div>
						<h3>Engineering in Computer Science</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt fuga deserunt repudiandae provident excepturi quas, nobis quis, omnis illum quae. Dicta nesciunt odit magni eius cumque iure sapiente sunt.</p>
						<img class="absolute h-15 top-8 right-10" src="@/assets/education/pet-engineering-college.png" alt="pet-engineering-college" />
					</div>
					<div class="bg-[#f2f5f9] rounded-md p-5 relative mt-7">
						<div class="flex">
							<p>Pulliman Matric Hr. Sec. School</p>
							<ion-icon :icon="calendar" class="text-[#787878] mt-1 h-5 w-5 pl-5"></ion-icon>
							<p class="pl-1">2020</p>
						</div>
						<h3>SSLC & HSC</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt fuga deserunt repudiandae provident excepturi quas, nobis quis, omnis illum quae. Dicta nesciunt odit magni eius cumque iure sapiente sunt.</p>
						<img class="absolute h-15 top-8 right-10" src="@/assets/education/pmhss.png" alt="pulliman-matric-hr-sec-school" />
					</div>
				</div>
			</div>
			<hr class="" />
	</ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonIcon, IonPage } from '@ionic/vue';
import { calendar, call, location, locationOutline, logoGithub, logoLinkedin, mail, phoneLandscape } from 'ionicons/icons';
</script>

<style scoped>
.side-headers {
	color: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #16243d;
}
.side-headers h4 {
	font-family: cursive;
	font-weight: 600;
	font-size: 1.27rem;
}
.side-headers h1 {
	font-weight: 600;
	font-size: 2.7rem;
	line-height: 3rem;
}

.image-container {
  width: 350px;
  background: #f2f5f9;
  padding: 20px;
	border-top-right-radius: 40px;
	border-bottom-right-radius: 40px;
}
.svg-frame {
  width: 100%;
  height: auto;
}

.main-content {
	color: #16243d;
}
.main-content h2 {
	font-size: 2.3rem;
	font-weight: bold;
}
.main-content h3 {
	font-size: 1.7rem;
	font-weight: 600;
}
.main-content p {
	color: #787878;
	font-size: 1.2rem;
}
.icon-label {
	font-size: 1rem;
}
</style>