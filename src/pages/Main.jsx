import React, { Component } from "react";
import "../App.css";

export default class Main extends Component {
	render() {
		return (
    <header class="body-font dark:bg-third" id="projects">
        <div class="container px-5 py-10 mx-auto">
            <div class="flex items-center justify-center">
                <div class="font-semibold text-center">
                    <h1 class="text-3xl dark:text-white">AUTHOR</h1>
                </div>
            </div>
            <section class="text-secondary body-font">
                <div class="container px-5 mx-auto flex flex-col">
                    <div class="mx-auto">
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <img class="mb-3 w-50 h-50 rounded-full shadow-lg mx-auto" src="anggit.png"
                                    alt="Anggit Nur Iman" />

                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-bold title-font mt-4 dark:text-white text-2xl font-secondary">Anggit
                                        Nur Iman</h2>
                                    <div class="w-12 h-1 dark:bg-white rounded mt-2 mb-4"></div>
                                    <p class="dark:text-white font-primary">Apps Development & Maintenance<br/>Rumah
                                        Zakat
                                    </p>
                                </div>
                            </div>
                            <div
                                class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-secondary dark:border-white sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify">
                                <p
                                    class="leading-relaxed text-lg mb-4 font-primary dark:text-white first-letter:text-7xl first-letter:float-left first-letter:mr-2">
                                    Anggit Nur Iman adalah nama lengkap saya, bisa di panggil <b>Kang Anggit</b> atau
                                    <b>Pak Anggit</b>. Aktivitas sebagai IT Operation & Infrastructure di salah satu
                                    perusahaan Lembaga Amil Zakat Nasional terbesar yaitu Rumah Zakat. Alhamdulillah di
                                    usia saya saat ini yang menginjak 29 tahun, saya tinggal di Tanjungsari, Kab.
                                    Sumedang, Jawa Barat bersama Istri dan kedua anak saya. Saya orang yang senang
                                    ngulik apalagi hal-hal yang berkaitan dengan IT. Kalau kata orang katanya saya orang
                                    yang ga mudah nyerah, terus ajah di ulik sampe puas atau solve problemnya. Kalaupun
                                    ga sesuai harapan setidaknya ngasih alternative 😅 </p>

                                <p class="leading-relaxed text-lg mb-4 font-primary dark:text-white">Sebetulnya basic
                                    saya awal berkecimpung di dunia IT lebih Network & Infrastruktur dan hal-hal yang
                                    berhubungan dengan pengelolaan server (kalau dulu namanya SysAdmin, sekarang namanya
                                    mungkin DevOps), namun ternyata setelah berkecimpung dan ber oskadon ria dengan
                                    coding, ternyata Web Developer itu seru dan gak ngebosenin dan skill problem solving
                                    saya makin terasah. Itu jadi pemicu saya untuk terus belajar dan meningkatkan skill
                                    sebagai Web Developer. Mungkin segitu ajah ya, kalau kebanyakan nanti jadi biografi
                                    atau novel 😅🙏</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </header>
		);
	}
}
