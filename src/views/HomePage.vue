<template>
    <ion-page>
        <ion-content>
            <div style="font-family: 'Poppins';" class="h-[100vh] bg-[whitesmoke] shadow-xl" shadow-gray-600>
                <!-- Header Section -->
                <div class="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] justify-center items-center py-10 px-5">
                    <!-- Profile Section -->
                    <div class="flex mt-4">
                        <p class="text-white text-xl font-medium pt-1.5">{{ userName }}</p>
                        <button @click="toggleProfilePanel" class="ml-auto active:scale-95 transition duration-200">
                            <img class="ml-auto h-10 w-10 bg-[cover] rounded-full shadow-lg shadow-gray-600" src="../assets/default-profile.jpeg" alt="profile-image" />
                        </button>
                    </div>
                    <div class="flex relative gap-5">
                        <!-- Search Bar -->
                        <div class="text-[#41754e] font-medium relative mt-5">
                            <input type="search" id="fullname" name="fullname" placeholder="Search by name" class="bg-white w-full text-sm rounded-lg shadow-lg shadow-gray-600 pl-3 pr-10 pt-2 pb-1 focus:outline-none">
                            <svg class="h-6 w-6 text-[#41754e] absolute top-1.5 right-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </div>
                        <!-- Filters -->
                        <div class="bg-white shadow-lg shadow-gray-600 mt-5 right-2 p-1 py-1.5 rounded-md
                        active:bg-[#66BB6A] active:text-white">
                            <svg class="h-6 w-7 text-[#41754e] pt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="4" y1="21" x2="4" y2="14" />
                                <line x1="4" y1="10" x2="4" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12" y2="3" />
                                <line x1="20" y1="21" x2="20" y2="16" />
                                <line x1="20" y1="12" x2="20" y2="3" />
                                <line x1="1" y1="14" x2="7" y2="14" />
                                <line x1="9" y1="8" x2="15" y2="8" />
                                <line x1="17" y1="16" x2="23" y2="16" />
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- Content -->
                <div class="bg-[whitesmoke] justify-center items-center p-5 -mt-3 rounded-2xl">
                    <!-- Welcome Bonus -->
                    <div class="bg-gradient-to-t from-[#2E7D32] to-[#66BB6A] rounded-xl shadow-lg shadow-gray-400 min-h-20 w-full p-5 relative">
                        <p class="bg-white text-center shadow-lg text-sm rounded-full font-medium px-2 py-1 w-[150px]">One time offer!</p>
                        <p class="text-white text-xl font-medium mt-4">Get Special Offer</p>
                        <p class="text-white text-md mt-1 font-medium">upto</p>
                        <p class="absolute top-22 left-18 text-[35px] font-medium text-white">60</p>
                        <p class="absolute top-30 left-28 px-1 bg-teal-600 text-white rounded-full text-[12px]">%</p>
                        <p class="text-white text-sm font-medium mt-4">on you first book</p>
                        <img class="absolute bottom-0 -right-4 w-[190px]" src="../assets/free-first-book.png" alt="one-time-offer" />
                        <p class="bg-[#C8E6C9] text-[#41754e] absolute bottom-4 right-6 shadow-lg shadow-gray-600 text-center text-[10px]
             rounded-full font-medium px-1 py-1 w-[70px] hover:bg-[#A5D6A7] transition">
                            Claim
                        </p>
                    </div>
                    <!-- Category -->
                    <div class="flex mx-2">
                      <p class="text-[#595959] mt-5 font-medium">Category</p>
                      <p class="text-[#307f34] mt-5 font-medium text-[12px] pt-1 ml-auto">See All</p>
                    </div>
                    <div class="mt-3 flex gap-10 overflow-auto scrollbar-hide mx-2">
                        <!-- CSE -->
                        <div class="cursor-pointer">
                            <div class="bg-[#e0e1da] p-2 rounded-full">
                                <svg class="h-7 w-7" fill="#307f34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M64 160C64 124.7 92.7 96 128 96L512 96C547.3 96 576 124.7 576 160L576 400L512 400L512 160L128 160L128 400L64 400L64 160zM0 467.2C0 456.6 8.6 448 19.2 448L620.8 448C631.4 448 640 456.6 640 467.2C640 509.6 605.6 544 563.2 544L76.8 544C34.4 544 0 509.6 0 467.2zM281 273L250 304L281 335C290.4 344.4 290.4 359.6 281 368.9C271.6 378.2 256.4 378.3 247.1 368.9L199.1 320.9C189.7 311.5 189.7 296.3 199.1 287L247.1 239C256.5 229.6 271.7 229.6 281 239C290.3 248.4 290.4 263.6 281 272.9zM393 239L441 287C450.4 296.4 450.4 311.6 441 320.9L393 368.9C383.6 378.3 368.4 378.3 359.1 368.9C349.8 359.5 349.7 344.3 359.1 335L390.1 304L359.1 273C349.7 263.6 349.7 248.4 359.1 239.1C368.5 229.8 383.7 229.7 393 239.1z" />
                                </svg>
                            </div>
                            <p class="text-[#595959] text-center mt-1 text-[13px] font-medium">CSE</p>
                        </div>
                        <!-- ECE -->
                        <div class="cursor-pointer">
                            <div class="bg-[#e0e1da] p-2 rounded-full">
                                <svg class="h-7 w-7" fill="#307f34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M240 88C240 74.7 229.3 64 216 64C202.7 64 192 74.7 192 88L192 128C156.7 128 128 156.7 128 192L88 192C74.7 192 64 202.7 64 216C64 229.3 74.7 240 88 240L128 240L128 296L88 296C74.7 296 64 306.7 64 320C64 333.3 74.7 344 88 344L128 344L128 400L88 400C74.7 400 64 410.7 64 424C64 437.3 74.7 448 88 448L128 448C128 483.3 156.7 512 192 512L192 552C192 565.3 202.7 576 216 576C229.3 576 240 565.3 240 552L240 512L296 512L296 552C296 565.3 306.7 576 320 576C333.3 576 344 565.3 344 552L344 512L400 512L400 552C400 565.3 410.7 576 424 576C437.3 576 448 565.3 448 552L448 512C483.3 512 512 483.3 512 448L552 448C565.3 448 576 437.3 576 424C576 410.7 565.3 400 552 400L512 400L512 344L552 344C565.3 344 576 333.3 576 320C576 306.7 565.3 296 552 296L512 296L512 240L552 240C565.3 240 576 229.3 576 216C576 202.7 565.3 192 552 192L512 192C512 156.7 483.3 128 448 128L448 88C448 74.7 437.3 64 424 64C410.7 64 400 74.7 400 88L400 128L344 128L344 88C344 74.7 333.3 64 320 64C306.7 64 296 74.7 296 88L296 128L240 128L240 88zM224 192L416 192C433.7 192 448 206.3 448 224L448 416C448 433.7 433.7 448 416 448L224 448C206.3 448 192 433.7 192 416L192 224C192 206.3 206.3 192 224 192zM240 240L240 400L400 400L400 240L240 240z" />
                                </svg>
                            </div>
                            <p class="text-[#595959] text-center mt-1 text-[13px] font-medium">ECE</p>
                        </div>
                        <!-- EEE -->
                        <div class="cursor-pointer">
                            <div class="bg-[#e0e1da] p-2 rounded-full">
                                <svg  class="h-7 w-7" fill="#307f34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M420.9 448C428.2 425.7 442.8 405.5 459.3 388.1C492 353.7 512 307.2 512 256C512 150 426 64 320 64C214 64 128 150 128 256C128 307.2 148 353.7 180.7 388.1C197.2 405.5 211.9 425.7 219.1 448L420.8 448zM416 496L224 496L224 512C224 556.2 259.8 592 304 592L336 592C380.2 592 416 556.2 416 512L416 496zM312 176C272.2 176 240 208.2 240 248C240 261.3 229.3 272 216 272C202.7 272 192 261.3 192 248C192 181.7 245.7 128 312 128C325.3 128 336 138.7 336 152C336 165.3 325.3 176 312 176z" />
                                </svg>
                            </div>
                            <p class="text-[#595959] text-center mt-1 text-[13px] font-medium">EEE</p>
                        </div>
                        <!-- Civil -->
                        <div class="cursor-pointer">
                            <div class="bg-[#e0e1da] p-2 rounded-full">
                                <svg class="h-7 w-7" fill="#307f34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M384 328L384 128C384 110.3 369.7 96 352 96L288 96C270.3 96 256 110.3 256 128L256 328C256 341.3 245.3 352 232 352C218.7 352 208 341.3 208 328L208 142.1C122 173.8 64 255.8 64 352L64 416L576 416L576 352C575 256.8 517.6 174.3 432 142.2L432 328C432 341.3 421.3 352 408 352C394.7 352 384 341.3 384 328zM72 464C49.9 464 32 481.9 32 504C32 526.1 49.9 544 72 544L568 544C590.1 544 608 526.1 608 504C608 481.9 590.1 464 568 464L72 464z" />
                                </svg>
                            </div>
                            <p class="text-[#595959] text-center mt-1 text-[13px] font-medium">CIVIL</p>
                        </div>
                        <!-- MECH -->
                        <div class="cursor-pointer">
                            <div class="bg-[#e0e1da] p-2 rounded-full">
                                <svg class="h-7 w-7" fill="#307f34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" />
                                </svg>
                            </div>
                            <p class="text-[#595959] text-center mt-1 text-[13px] font-medium">MECH</p>
                        </div>
                    </div>
                    <!-- Recommended -->
                    <div class="flex mx-2">
                      <p class="text-[#595959] mt-5 font-medium">Recommended</p>
                      <p class="text-[#307f34] mt-5 font-medium text-[12px] pt-1 ml-auto">See All</p>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="bg-[#e0e1da]">
                        <img />
                      </div>
                    </div>
                </div>
            </div>
            <!-- Dimmed background when profile panel is open -->
            <div v-if="showProfile" @click="toggleProfilePanel" class="fixed inset-0 z-40" style="background-color: rgba(0, 0, 0, 0.5);"></div>
            <!-- Slide-up profile panel -->
            <transition name="slide-up">
                <div v-if="showProfile" class="fixed bottom-0 left-0 w-full bg-[whitesmoke] p-4 rounded-t-2xl shadow-lg z-50">
                    <p class="text-center text-[#41754e] font-semibold text-lg mb-4">Profile Options</p>
                    <div @click="handleLogout" class="w-full bg-red-500 text-center text-[whitesmoke] py-1 rounded-xl font-semibold
                  hover:bg-red-600 active:bg-red-700 active:scale-95
                  shadow-md hover:shadow-lg transition-all duration-200">
                        Logout
                    </div>

                </div>
            </transition>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import {
        defineComponent
    } from 'vue'
    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonIcon,
        IonContent
    } from '@ionic/vue'
    import {
        logout
    } from '@/api/auth.js'
    import {
        codeOutline
    } from 'ionicons/icons'
    export default defineComponent({
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonButtons,
            IonButton,
            IonIcon,
            IonContent
        },
        data() {
            return {
                showProfile: false,
                userName: null,
            }
        },
        mounted() {
            this.userName = localStorage.fullName
        },
        methods: {
            toggleProfilePanel() {
                this.showProfile = !this.showProfile
            },
            async handleLogout() {
                try {
                    await logout()
                    this.$router.push('/login')
                } catch (error) {
                    console.error('Logout failed:', error)
                }
            }
        },
    })
</script>


<style scoped>
    .slide-up-enter-active,
    .slide-up-leave-active {
        transition: transform 0.3s ease;
    }

    .slide-up-enter-from,
    .slide-up-leave-to {
        transform: translateY(100%);
    }

    .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;     /* Firefox */
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;             /* Chrome, Safari */
    }

</style>