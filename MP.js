    // Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát

    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const PlAYER_STORAGE_KEY = "F8_PLAYER";

    const player = $(".player");
    const cd = $(".cd");
    const heading = $("header h2");
    const cdThumb = $(".cd-thumb");
    const audio = $("#audio");
    const playBtn = $(".btn-toggle-play");
    const progress = $("#progress");
    const prevBtn = $(".btn-prev");
    const nextBtn = $(".btn-next");
    const randomBtn = $(".btn-random");
    const repeatBtn = $(".btn-repeat");
    const playlist = $(".playlist");
    var arraySong = []

    const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        isRepeat: false,
        config: {},
        config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
        songs: [{
                name: "Cơn Mưa Ngang Qua",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Cơn Mưa Ngang Qua.mp3",
                image: "./assets/Img/Cơn Mưa Ngang Qua.jpg"
            },
            {
                name: "Cơn Mưa Ngang Qua (Part 2)",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Cơn Mưa Ngang Qua (Part 2).mp3",
                image: "./assets/Img/Cơn Mưa Ngang Qua (Part 2).jpg"
            },
            {
                name: "Cơn Mưa Ngang Qua (Part 3)",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Cơn Mưa Ngang Qua (Part 3).mp3",
                image: "./assets/Img/Cơn Mưa Ngang Qua (Part 3).jpg"
            },
            {
                name: "Nắng Ấm Xa Dần",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Nắng Ấm Xa Dần.mp3",
                image: "./assets/Img/Nắng Ấm Xa Dần.jpg"
            },
            {
                name: "Remember Me",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Remember Me.mp3",
                image: "./assets/Img/Remember Me.jpg"
            },
            {
                name: "Khuôn Mặt Đáng Thương",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Khuôn Mặt Đáng Thương.mp3",
                image: "./assets/Img/Khuôn Mặt Đáng Thương.jpg"
            },
            {
                name: "Em Của Ngày Hôm Qua",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Em Của Ngày Hôm Qua.mp3",
                image: "./assets/Img/Em Của Ngày Hôm Qua.jpg"
            },
            {
                name: "You Of Yesterday",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/You Of Yesterday.mp3",
                image: "./assets/Img/You Of Yesterday.jpg"
            },
            {
                name: "Không Phải Dạng Vừa Đâu",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Không Phải Dạng Vừa Đâu.mp3",
                image: "./assets/Img/Không Phải Dạng Vừa Đâu.jpg"
            },
            {
                name: "Không Phải Dạng Vừa Đâu (Version 2)",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Không Phải Dạng Vừa Đâu (Version 2).mp3",
                image: "./assets/Img/Không Phải Dạng Vừa Đâu (Version 2).jpg"
            },
            {
                name: "Ấn Nút Nhớ Thả Giấc Mơ",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Ấn Nút Nhớ Thả Giấc Mơ.mp3",
                image: "./assets/Img/Ấn Nút Nhớ Thả Giấc Mơ.jpg"
            },
            {
                name: "Âm Thầm Bên Em",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Âm Thầm Bên Em.mp3",
                image: "./assets/Img/Âm Thầm Bên Em.jpg"
            },
            {
                name: "Buông Đôi Tay Nhau Ra",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Buông Đôi Tay Nhau Ra.mp3",
                image: "./assets/Img/Buông Đôi Tay Nhau Ra.jpg"
            },
            {
                name: "Chúng Ta Không Thuộc Về Nhau",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Chúng Ta Không Thuộc Về Nhau.mp3",
                image: "./assets/Img/Chúng Ta Không Thuộc Về Nhau.jpg"
            },
            {
                name: "Nơi Này Có Anh",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Nơi Này Có Anh.mp3",
                image: "./assets/Img/Nơi Này Có Anh.jpg"
            },
            {
                name: "Bình Yên Những Phút Giây",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Bình Yên Những Phút Giây.mp3",
                image: "./assets/Img/Bình Yên Những Phút Giây.jpg"
            },
            {
                name: "Như Ngày Hôm Qua",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Như Ngày Hôm Qua.mp3",
                image: "./assets/Img/Như Ngày Hôm Qua.jpg"
            },
            {
                name: "Chắc Ai Đó Sẽ Về",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Chắc Ai Đó Sẽ Về.mp3",
                image: "./assets/Img/Chắc Ai Đó Sẽ Về.jpg"
            },
            {
                name: "Chạy Ngay Đi",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Chạy Ngay Đi.mp3",
                image: "./assets/Img/Chạy Ngay Đi.jpg"
            },
            {
                name: "Tiến Lên Việt Nam Ơi",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Tiến Lên Việt Nam Ơi.mp3",
                image: "./assets/Img/Tiến Lên Việt Nam Ơi.jpg"
            },
            {
                name: "Lạc Trôi",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Lạc Trôi.mp3",
                image: "./assets/Img/Lạc Trôi.jpg"
            },
            {
                name: "Một Năm Mới Bình An",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Một Năm Mới Bình An.mp3",
                image: "./assets/Img/Một Năm Mới Bình An.jpg"
            },
            {
                name: "Hãy Trao Cho Anh",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Hãy Trao Cho Anh.mp3",
                image: "./assets/Img/Hãy Trao Cho Anh.jpg"
            },
            {
                name: "Có Chắc Yêu Là Đây",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Có Chắc Yêu Là Đây.mp3",
                image: "./assets/Img/Có Chắc Yêu Là Đây.jpg"
            },
            {
                name: "Chúng Ta Của Hiện Tại",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Chúng Ta Của Hiện Tại.mp3",
                image: "./assets/Img/Chúng Ta Của Hiện Tại.jpg"
            },
            {
                name: "Muộn Rồi Mà Sao Còn",
                singer: "Sơn Tùng M-TP",
                path: "./assets/Music/Muộn Rồi Mà Sao Còn.mp3",
                image: "./assets/Img/Muộn Rồi Mà Sao Còn.jpg"
            },
            {
                name: "Đi Để Trở Về",
                singer: "Soobin Hoàng Sơn",
                path: "./assets/Music/Đi Để Trở Về.mp3",
                image: "./assets/Img/Đi Để Trở Về.jpg"
            },
            {
                name: "Xin Đừng Lặng Im",
                singer: "Soobin Hoàng Sơn",
                path: "./assets/Music/Xin Đừng Lặng Im.mp3",
                image: "./assets/Img/Xin Đừng Lặng Im.jpg"
            },
            {
                name: "Heartbreaker",
                singer: "G-Dragon",
                path: "./assets/Music/Heartbreaker.mp3",
                image: "./assets/Img/Heartbreaker.jpg"
            },
            {
                name: "Haru Haru",
                singer: "G-Dragon",
                path: "./assets/Music/Haru Haru.mp3",
                image: "./assets/Img/Haru Haru.jpg"
            },
            {
                name: "Faded",
                singer: "Alan Walker",
                path: "./assets/Music/Faded.mp3",
                image: "./assets/Img/Faded.jpg"
            },
            {
                name: "All Falls Down",
                singer: "Alan Walker",
                path: "./assets/Music/All Falls Down.mp3",
                image: "./assets/Img/All Falls Down.jpg"
            },
            {
                name: "The Spectre",
                singer: "Alan Walker",
                path: "./assets/Music/The Spectre.mp3",
                image: "./assets/Img/The Spectre.jpg"
            },
            {
                name: "Sign",
                singer: "Deamn",
                path: "./assets/Music/Sign.mp3",
                image: "./assets/Img/Sign.jpg"
            },
            {
                name: "Save Me",
                singer: "Deamn",
                path: "./assets/Music/Save Me.mp3",
                image: "./assets/Img/Save Me.jpg"
            },
            {
                name: "Unity",
                singer: "TheFatRat",
                path: "./assets/Music/Unity.mp3",
                image: "./assets/Img/Unity.jpg"
            },
            {
                name: "Monody",
                singer: "TheFatRat",
                path: "./assets/Music/Monody.mp3",
                image: "./assets/Img/Monody.jpg"
            },
            {
                name: "Jackpot",
                singer: "TheFatRat",
                path: "./assets/Music/Jackpot.mp3",
                image: "./assets/Img/Jackpot.jpg"
            },
            {
                name: "Fly Away",
                singer: "TheFatRat",
                path: "./assets/Music/Fly Away.mp3",
                image: "./assets/Img/Fly Away.jpg"
            },
            {
                name: "Cloud 9",
                singer: "Tobu & Itro",
                path: "./assets/Music/Cloud 9.mp3",
                image: "./assets/Img/Cloud 9.jpg"
            },
            {
                name: "Sunburst",
                singer: "Tobu & Itro",
                path: "./assets/Music/Sunburst.mp3",
                image: "./assets/Img/Sunburst.jpg"
            },
            {
                name: "Candyland",
                singer: "Tobu",
                path: "./assets/Music/Candyland.mp3",
                image: "./assets/Img/Candyland.jpg"
            },
            {
                name: "Hope",
                singer: "Tobu",
                path: "./assets/Music/Hope.mp3",
                image: "./assets/Img/Hope.jpg"
            },
            {
                name: "Infectious",
                singer: "Tobu",
                path: "./assets/Music/Infectious.mp3",
                image: "./assets/Img/Infectious.jpg"
            },
            {
                name: "Life",
                singer: "Tobu",
                path: "./assets/Music/Life.mp3",
                image: "./assets/Img/Life.jpg"
            },
            {
                name: "Colors",
                singer: "Tobu",
                path: "./assets/Music/Colors.mp3",
                image: "./assets/Img/Colors.jpg"
            },
            {
                name: "Nevada",
                singer: "Vicetone",
                path: "./assets/Music/Nevada.mp3",
                image: "./assets/Img/Nevada.jpg"
            },
            {
                name: "Summertime",
                singer: "K-391",
                path: "./assets/Music/Summertime.mp3",
                image: "./assets/Img/Summertime.jpg"
            },
            {
                name: "Invincible",
                singer: "Deaf Kev",
                path: "./assets/Music/Invincible.mp3",
                image: "./assets/Img/Invincible.jpg"
            },
            {
                name: "Blank",
                singer: "Disfigure",
                path: "./assets/Music/Blank.mp3",
                image: "./assets/Img/Blank.jpg"
            },
            {
                name: "Gurenge(KNY)",
                singer: "Lisa",
                path: "./assets/Music/Gurenge.mp3",
                image: "./assets/Img/Gurenge.jpg"
            },
            {
                name: "Unravel(TG)",
                singer: "TK",
                path: "./assets/Music/Unravel.mp3",
                image: "./assets/Img/Unravel.jpg"
            },
            {
                name: "Shinzou Wo Sasageyo!(AOT)",
                singer: "Linked Horizon",
                path: "./assets/Music/Shinzou Wo Sasageyo!.mp3",
                image: "./assets/Img/Shinzou Wo Sasageyo!.jpg"
            },
            {
                name: "Guren No Yumiya(AOT)",
                singer: "Linked Horizon",
                path: "./assets/Music/Guren No Yumiya.mp3",
                image: "./assets/Img/Guren No Yumiya.jpg"
            },
            {
                name: "A Tender Feeling",
                singer: "Yuki Kajiura",
                path: "./assets/Music/A Tender Feeling.mp3",
                image: "./assets/Img/A Tender Feeling.jpg"
            },
            {
                name: "Crossing Field(SAO)",
                singer: "Lisa",
                path: "./assets/Music/Crossing Field.mp3",
                image: "./assets/Img/Crossing Field.jpg"
            },
            {
                name: "Ignite(SAO2)",
                singer: "Eir Aoi",
                path: "./assets/Music/Ignite.mp3",
                image: "./assets/Img/Ignite.jpg"
            },
            {
                name: "Cha-La Head-Cha-La(DB)",
                singer: "V.A",
                path: "./assets/Music/Cha-La Head-Cha-La.mp3",
                image: "./assets/Img/Cha-La Head-Cha-La.jpg"
            },
            {
                name: "Detective Conan Theme",
                singer: "Katsuo Ohno",
                path: "./assets/Music/Detective Conan Theme.mp3",
                image: "./assets/Img/Detective Conan Theme.jpg"
            },
            {
                name: "Sadness And Sorrow",
                singer: "Toshiro Masuda",
                path: "./assets/Music/Sadness And Sorrow.mp3",
                image: "./assets/Img/Sadness And Sorrow.jpg"
            },
            {
                name: "Hokage Funeral",
                singer: "Hòa Tấu",
                path: "./assets/Music/Hokage Funeral.mp3",
                image: "./assets/Img/Hokage Funeral.jpg"
            },
            {
                name: "Naruto Theme",
                singer: "Toshiro Masuda",
                path: "./assets/Music/Naruto Theme.mp3",
                image: "./assets/Img/Naruto Theme.jpg"
            },
            {
                name: "Luffy Moukou",
                singer: "V.A",
                path: "./assets/Music/Luffy Moukou.mp3",
                image: "./assets/Img/Luffy Moukou.jpg"
            },
            {
                name: "Overtaken(OP)",
                singer: "Shiro Hamaguchi",
                path: "./assets/Music/Overtaken.mp3",
                image: "./assets/Img/Overtaken.jpg"
            },
            {
                name: "The Strongest(OP)",
                singer: "V.A",
                path: "./assets/Music/The Strongest.mp3",
                image: "./assets/Img/The Strongest.jpg"
            },
            // {
            //     name: "",
            //     singer: "",
            //     path: "./assets/Music/.mp3",
            //     image: "./assets/Img/.jpg"
            // },
        ],
        setConfig: function(key, value) {
            this.config[key] = value;
            localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
        },
        render: function() {
            const htmls = this.songs.map((item, index) => {
                return `        
            <div data-index="${index}" class="song ${
            index === this.currentIndex ? 'active' : ''
          }">
                <div
                    class="thumb"
                    style="
                    background-image: url('${item.image}');
                "
                ></div>
                <div class="body">
                    <h3 class="title">${item.name}</h3>
                    <p class="author">${item.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`;
            });
            $('.playlist').innerHTML = htmls.join('');
        },
        defineProperties: function() {
            Object.defineProperty(this, "currentSong", {
                get: function() {
                    return this.songs[this.currentIndex];
                }
            });
        },
        handleEvents: function() {
            const _this = this;
            const cdWidth = cd.offsetWidth;

            // Xử lý CD quay / dừng
            const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
                duration: 10000, // 10 seconds
                iterations: Infinity
            });
            cdThumbAnimate.pause();

            // Xử lý phóng to / thu nhỏ CD
            document.onscroll = function() {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const newCdWidth = cdWidth - scrollTop;

                cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
                cd.style.opacity = newCdWidth / cdWidth;
            };

            // Xử lý khi click play
            playBtn.onclick = function() {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
            };

            // Khi song được play
            audio.onplay = function() {
                _this.isPlaying = true;
                player.classList.add("playing");
                cdThumbAnimate.play();
            };

            // Khi song bị pause
            audio.onpause = function() {
                _this.isPlaying = false;
                player.classList.remove("playing");
                cdThumbAnimate.pause();
            };

            // Khi tiến độ bài hát thay đổi
            audio.ontimeupdate = function() {
                if (audio.duration) {
                    const progressPercent = Math.floor(
                        (audio.currentTime / audio.duration) * 100
                    );
                    progress.value = progressPercent;
                }
            };

            // Xử lý khi tua song
            progress.oninput = function(e) {
                // từ số phần trăm của giây convert sang giây
                const seekTime = audio.duration / 100 * e.target.value;
                audio.currentTime = seekTime;
                audio.play();
            };

            // Khi next song
            nextBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong();
                } else {
                    _this.nextSong();
                }
                audio.play();
                _this.render();
                _this.scrollToActiveSong();
            };

            // Khi prev song
            prevBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong();
                } else {
                    _this.prevSong();
                }
                audio.play();
                _this.render();
                _this.scrollToActiveSong();
            };

            // Xử lý bật / tắt random song
            randomBtn.onclick = function(e) {
                _this.isRandom = !_this.isRandom;
                _this.setConfig("isRandom", _this.isRandom);
                randomBtn.classList.toggle("active", _this.isRandom);
            };

            // Xử lý lặp lại một song
            repeatBtn.onclick = function(e) {
                _this.isRepeat = !_this.isRepeat;
                _this.setConfig("isRepeat", _this.isRepeat);
                repeatBtn.classList.toggle("active", _this.isRepeat);
            };

            // Xử lý next song khi audio ended
            audio.onended = function() {
                if (_this.isRepeat) {
                    audio.play();
                } else {
                    nextBtn.click();
                }
            };

            // Lắng nghe hành vi click vào playlist
            playlist.onclick = function(e) {
                let songNode = e.target.closest('.song:not(.active)');
                if (!e.target.closest('.option')) {
                    if (songNode) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        _this.loadCurrentSong();
                        audio.play();
                    }
                }
            }
        },
        scrollToActiveSong: function() {
            setTimeout(() => {
                if (this.currentIndex <= 3) {
                    $('.song.active').scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                    });
                } else {
                    $('.song.active').scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                }
            }, 300);
        },

        loadCurrentSong: function() {
            heading.textContent = this.currentSong.name;
            cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
            audio.src = this.currentSong.path;

            if ($('.song.active')) {
                $('.song.active').classList.remove('active');
            }
            const list = $$('.song');
            list.forEach((song) => {
                if (song.getAttribute('data-index') == this.currentIndex) {
                    song.classList.add('active');
                }
            });
        },
        loadConfig: function() {
            this.isRandom = this.config.isRandom;
            this.isRepeat = this.config.isRepeat;
        },
        nextSong: function() {
            this.currentIndex++;
            if (this.currentIndex >= this.songs.length) {
                this.currentIndex = 0;
            }
            this.loadCurrentSong();
        },
        prevSong: function() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.songs.length - 1;
            }
            this.loadCurrentSong();
        },
        playRandomSong: function() {
            let newIndex
            do {
                newIndex = Math.floor(Math.random() * this.songs.length)
            } while (arraySong.includes(newIndex))
            this.currentIndex = newIndex
            this.inputArray()
            this.loadCurrentSong()
        },
        inputArray: function() {
            if (arraySong.length < this.songs.length - 1) {
                arraySong.push(this.currentIndex)
            } else {
                arraySong = []
                arraySong.push(this.currentIndex)
            }
        },
        start: function() {
            // Gán cấu hình từ config vào ứng dụng
            this.loadConfig();

            // Định nghĩa các thuộc tính cho object
            this.defineProperties();

            // Lắng nghe / xử lý các sự kiện (DOM events)
            this.handleEvents();

            // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
            this.loadCurrentSong();

            // Render playlist
            this.render();

            // Hiển thị trạng thái ban đầu của button repeat & random
            randomBtn.classList.toggle("active", this.isRandom);
            repeatBtn.classList.toggle("active", this.isRepeat);
        }
    };

    app.start();
