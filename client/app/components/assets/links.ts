type mlink = {
    [key: number]: [link: string];
};

type Movie = {
    id: number;
    src: any;
    alt: string;
}

type Sport = {
    id: number;
    src: any;
    alt: string;
}

const MovieLinks: mlink = {
    1: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsSlIuRZMNllJkvZ4MxkwT0BmB017l0L-dA&usqp=CAU"],
    2: ["https://cdn.marvel.com/content/1x/eternals_lob_crd_06.jpg"],
    3: ["https://i0.wp.com/thinkmonsters.com/speakinghuman/media/wp-content/uploads/MOVIE_AntManATWasp.jpg?resize=540%2C810&ssl=1"],
    4: ["https://media.comicbook.com/2017/10/guardians-of-the-galaxy-movie-poster-marvel-cinematic-universe-1038897.jpg"],
    5: ["https://pm1.aminoapps.com/6874/42fcf1aea8011a591de77e8bb3c01740a236c73fr1-640-950v2_uhq.jpg"],
    6: ["https://cdn.marvel.com/content/1x/stellarvortex_reald_digital_poster_1080x1350_v1.jpg"],
    7: ["https://i.pinimg.com/736x/5e/60/76/5e607616db4a962373a8e3a6ae6eb76f.jpg"],
    8: ["https://mir-s3-cdn-cf.behance.net/project_modules/hd/4627fe72571409.5bebed617acbb.jpg"],
};

const SportLinks: mlink = {
    1: ["https://www.timesofsports.com/wp-content/uploads/2021/09/RCB-vs-CSK-IPL-2021.png"],
    2: ["https://www.insidesport.in/wp-content/uploads/2021/03/Los-Angeles-Lakers-vs-Golden-State-Warriors-NBA-Odds-and-Predictions.jpg"],
    3: ["https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/iblxrrwvbcvc24ljos15"],
    4: ["https://t4.ftcdn.net/jpg/02/73/88/35/360_F_273883547_7RXzPPn3dHZySa6vyBH3IYu5LSzwIlrF.jpg"],
    5: ["https://bsmedia.business-standard.com/_media/bs/img/article/2022-04/10/full/1649586921-3285.jpg"],
    6: ["https://qph.cf2.quoracdn.net/main-qimg-8b7f3cf7f20063bf92327b176437c6be-lq"],
    7: ["https://wrestlingheadlines.com/wp-content/uploads/2021/05/reigns-cesaro-backlash-2.jpg"],
    8: ["https://c4.wallpaperflare.com/wallpaper/256/774/430/5c1c994e7de31-wallpaper-preview.jpg"],
}

export const movies: Movie[] = [
    { id: 1, src: MovieLinks[1], alt: "Image 1" },
    { id: 2, src: MovieLinks[2], alt: "Image 2" },
    { id: 3, src: MovieLinks[3], alt: "Image 3" },
    { id: 4, src: MovieLinks[4], alt: "Image 4" },
    { id: 5, src: MovieLinks[5], alt: "Image 5" },
    { id: 6, src: MovieLinks[6], alt: "Image 6" },
    { id: 7, src: MovieLinks[7], alt: "Image 7" },
    { id: 8, src: MovieLinks[8], alt: "Image 8" },
  ];

export const sports: Sport[] = [
    { id: 1, src: SportLinks[1], alt: "Image 1" },
    { id: 2, src: SportLinks[2], alt: "Image 2" },
    { id: 3, src: SportLinks[3], alt: "Image 3" },
    { id: 4, src: SportLinks[4], alt: "Image 4" },
    { id: 5, src: SportLinks[5], alt: "Image 5" },
    { id: 6, src: SportLinks[6], alt: "Image 6" },
    { id: 7, src: SportLinks[7], alt: "Image 7" },
    { id: 8, src: SportLinks[8], alt: "Image 8" },
  ];