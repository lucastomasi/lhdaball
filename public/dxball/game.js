window.startDxBall = function startDxBall() {
  const canvasEl = document.getElementById('c');
  if (!canvasEl || canvasEl.dataset.booted === '1') return;
  canvasEl.dataset.booted = '1';
  if (window.__dxballRaf) cancelAnimationFrame(window.__dxballRaf);

const LEVELS = [
  { name: "Level 1", rows: ["....................","....................","....................","....................","....................",".....1181118111.....","..8EEE8EEE8EEE8EEE..",".8GGG8GGG8GGG8GGG8G.","8BBB8BBB8BBB8BBB8BBB","GGG8GGG8GGG8GGG8GGG8","EE8EEE8EEE8EEE8EEE8E","18111811181118111811",".EEE8EEE8EEE8EEE8EE.","..G8GGG8GGG8GGG8GG..",".....B8BBB8BBB8.....","....................","....................","....................","....................","...................."] },
  { name: "Level 2", rows: ["....................","....................","....88........88....","..8L..8......8..L8..",".8LBLL.8....8.LLBL8.","8BBBBBL.8..8.LBBBBB8","AAAAA8BL.88.LB8AAAAA","99999A8BL..LB8A99999","228899A8BLLB8A998822","8D22899A8BB8A99822D8","18DD2899A88A9982DD81","718DD2899AA9982DD817",".718DD28999982DD817.","..718DD289982DD817..","...718DD2882DD817...","....718DD22DD817....",".....718DDDD817.....","......71811817......",".......718817.......","........7777........"] },
  { name: "Level 3", rows: ["....................","....................","..M.....BBBB.....M..","..M....BBBBBB....M..","..M...BBBBBBBB...M..","..M....BBBBBB....M..","..M.....BBBB.....M..","..7MMMMCCCCCCMMMM7..",".787777HAAAAH777787.",".788888HALLAH888887.",".788888HL22LH888887.",".787777CALLAC777787.","..7GGGGCCAACCGGGG7..","..G.....BBBB.....G..","..G....BBBBBB....G..","..G...BBBBBBBB...G..","..G....BBBBBB....G..","..G.....BBBB.....G..","....................","...................."] },
  { name: "Level 4", rows: [".777777777777777777.",".787787787787787787.",".777777777777777777.",".777222B1DD1B222777.",".7872BB1DDDD1BB2787.",".7772B1DDKKDD1B2777.",".777B1DDKHHKDD1B777.",".7871DDKH..HKDD1787.",".777DDKH.22.HKDD777.",".777DDKH.22.HKDD777.",".7871DDKH..HKDD1787.",".777B1DDKHHKDD1B777.",".7772B1DDKKDD1B2777.",".7872BB1DDDD1BB2787.",".777222B1DD1B222777.",".777777777777777777.",".787787787787787787.",".777777777777777777.","....................","...................."] },
  { name: "Level 5", rows: ["....................","....................","....................","....................","...BFFFFFFFFFFFFB...","..BF777777777777FB..",".BF7GGGGGGGGGGGG7FB.",".F7G555555555555G7F.",".FGBBBBBBBBBBBBBBGF.",".G7577777777777757G.",".GGGGGGGGGGGGGGGGGG.",".G7577777777777757G.",".FGBBBBBBBBBBBBBBGF.",".F7G555555555555G7F.",".BF7GGGGGGGGGGGG7FB.","..BF777777777777FB..","...BFFFFFFFFFFFFB...","....................","....................","...................."] },
  { name: "Level 6", rows: ["....................",".....2K2K2K2K2K.....",".....8888888888.....",".88..............88.",".A5.CMCMCMCMCMCM.5A.","85A.MC.C.C.C.C.C.A58","8B5.C.........CM.5B8","85B.MC.999999..C.B58","8A5.C..98II8I.CM.5A8","85A.MC.9II9IJ..C.A58","8B5.C..9I9IJI.CM.5B8","85B.MC.98IJ8J..C.B58","8A5.C..9IJIJI.CM.5A8","85A.MC.........C.A58","8B5.C.C.C.C.C.CM.5B8",".5B.MCMCMCMCMCMC.B5.",".88..............88.",".....8888888888.....",".....D2D2D2D2D2.....","...................."] },
  { name: "Level 7", rows: ["......45....345.....","......345....345....",".......345....345...",".....K..345....345..","5...D7D..345....345.","45.17E71..345....345","345.171....34.K.....",".345.1.......D7D....","..345..45...17E71...","...345.345...171....","....345.345...1.....","...K.3...345......45","..D7D.....345.....34",".17E71.....345.....3","..171.......345.....","...1.........345.K..","................D7D.","...............17E71","................171.",".................1.."] },
  { name: "Level 8", rows: ["...8............8...","..8..3333333333..8..","..8.3.99999999.3.8..","..8.39.J8JJ8J.93.8..",".8..39J8IIII8J93..8.","....398I3..3I893....",".11139JI.33.IJ93111.",".AAA39JI.88.IJ93AAA.",".AAA39JI.88.IJ93AAA.",".11139JI.33.IJ93111.","....398I3..3I893....",".8..39J8IIII8J93..8.","..8.39.J8JJ8J.93.8..","..8.3.99999999.3.8..","..8..3333333333..8..","...8............8...","....................","....................","....................","...................."] },
  { name: "Level 9", rows: [".777................","B787................","AB7777..............","MAB787..............","MMAB7777............","M8MAB787............","CMMMAB7777..........","8CM8MAB787..........","CCCMMMAB7777........","MC8CM8MAB787........","MMCCCMMMAB7777......","M8MC8CM8MAB787......","AMMMCCCMMMAB7777....","8AM8MC8CM8MAB787....","AAAMMMCCCMMMAB7777..","BA8AM8MC8CM8MAB787..","BBAAAMMMCCCMMMAB77..","B8BA8AM8MC8CM8MAB...","BBBBAAAMMMCCCMMMAB..","333333333333333333.."] },
  { name: "Level 10", rows: ["..AAA..........AAA..",".ACMBA.8....8.ABMCA.",".ACMBA..8..8..ABMCA.",".ACMBA..8..8..ABMCA.",".ACCMBA.8..8.ABMCCA.","..ACMBA.8..8.ABMCA..","..ACMBA.K..K.ABMCA..","..ACCMBKLKKLKBMCCA..","...ACMBKFGGFKBMCA...","...ACCMKGFFGKMCCA...","....ACMKFGGFKMCA....",".....ACKLGGLKCA.....","......AKLGGLKA......","........KLLK........",".......D.KK.D.......",".....7D7....7D7.....",".....787....787.....",".....777....777.....","....................","...................."] },
  { name: "Level 11", rows: [".38888888..88888883.",".389JIHC85.8FGBE183.",".38JIHCM8458KFGBE83.",".38IHCMA8348DKFGB83.",".3888MA98.381DK8883.",".3338A9J85.8E1D8333.","...389JI8458BE183...","...38JIH8348GBE83...","...38IHC8.38FGB83...","43338HCM85.8KFG83343","33888CMA8458DKF88834","438HCMA983481DKFG843","338CMA9J8.38E1DKF834","438MA9JI85.8BE1DK843","33888888845888888834","43434343434343434343","54343434343434343435",".555555555555555555.","....................","...................."] },
  { name: "Level 12", rows: ["........A..AA......1",".........AA..A....1.",".........A....1..11.","........A......11..1","....A..AA......1....",".....AA..A....1.....",".....A....1..11.....","....A......11..1....","A..AA......1....J..J",".AA..A....1......JJ.",".A....1..11......J..","A......11..1....J...","A......1....J..JJ...",".A....1......JJ..J..","..1..11......J......","...11..1....J.......","...1....J..JJ.......","..1......JJ..J......",".11......J..........","1..1....J..........."] },
  { name: "Level 13", rows: ["......IJE1345.......",".....H2KD54345......",".....IJE154345......","....H2KD..54345.....","....IJE1..54345.....","...H2KD....54345....","...IJE1....54345....","...H2KD....54345....","...IJE1....54345....","....H2KD..54345.....","....IJE1..5345......",".....H2KD54345......",".....IJE154345......","......H2KD345.......","......5431EJI.......",".....54345KD2H......",".....543451EJI......","....54345..KD2H.....","....54345..1EJI.....","....5434....D2H....."] },
  { name: "Level 14", rows: ["....22222..22222....",".....287....782.....",".....27......72.....","....72...22...27....","...782..7887..287...","....72........27....",".72....27..72....27.","782....288882....287",".72....278872....27.","782....288882....287",".72....27..72....27.","....72........27....","...782..7887..287...","....72...22...27....",".....27.7..7.72.....",".....2878778782.....","....22222..22222....",".........77.........","........7887........",".........22........."] },
  { name: "Level 15", rows: [".....3..............","....A39.............","...AA129............","...A1129............","...A1229............","...A1229............","...A1229............","....112.............",".....1..............","....................","LLLLLLLLL77LLLLLLLLL","3HCCBBCCCCCCCCCC2CH3","3HCC33CCCCCCCCCC22H3","3HCABBACCCCCCC2A2CH3","3HHA33AHHHHHHH222HH3","3HCABBAHHHHHHHHDHHH3","3HC3BB3CCCCCCCCCCCH3","3HCC33CCCCCCCCCCCCH3","3HCCBBCCCCCCHHHHHHH3","3HHHHHHCCCCCHHHHHHH3"] },
  { name: "Level 16", rows: ["....................","E.E.E.E.E.E.E.E.E.E.","5EAEA5AEAEAE5EAEA5AE","A5AAAA5AAAAAA5AAAA5A","BA5ABAB5BABABA5ABAB5","BBB5BBBB5BBBBBB5BBBB","EBEB5BEBE5EBEBEB5BEB",".E.E.E.E.E.E.E.E.E.E","....................","....................","....................","....................","L...LLLL....LLLL...L","5...5555....5555...5","4...4444....4444...4","3...3333....3333...3",".333....3333....333.",".444....4444....444.",".555....5555....555.",".LLL....LLLL....LLL."] },
  { name: "Level 17", rows: ["....................","..................L.",".L...............L2L","L2L...............L.",".L...............9..","9......L.........9..","9.....L2L........9..","9......L......I.9...","9.I...9.......II9...","9II...9.I......I9...","9I....9II....L..9.I.","9.....9I....L2L.9II.","9..L..9......L..9I..","9.L2L.9..L....9.9...","9..L..9.L2L.I.9.9...","9...9.9..L..II9.9...","9.I.9.9...9..I9.9...","9.II9.9..I9...9.9...","9..I9.9...9...9.9...","DDDDDDDDDDDDDDDDDDDD"] },
  { name: "Level 18", rows: ["..IIII.8.MM.8.IIII..",".9999.8.CCCC.8.9999.","IIII.8.MMMMMM.8.IIII","999.8.CCC33CCC.8.999","II.8.MMM3453MMM.8.II","9.8.CCCC3453CCCC.8.9","II.8.MMM3453MMM.8.II","999.8.CCC33CCC.8.999","IIII.8.MMMMMM.8.IIII","99999.8.CCCC.8.99999","3IIIII.8.MM.8.IIIII3","5399999.8..8.9999934","53IIIIII.88.IIIIII34","5399999.8..8.9999934","3IIIII.8.MM.8.IIIII3","99999.8.CCCC.8.99999","IIII.8.MMMMMM.8.IIII","999.8.CCC33CCC.8.999","II.8.MMM3453MMM.8.II","9.8.CCCC3453CCCC.8.9"] },
  { name: "Level 19", rows: ["...AAAA1111111111...","...AA3A3333333333...","...A3AA1111111111...","...AA3A3333333333...","...A3AA1111111111...","...AA3A3333333333...","...AAAA1111111111...","...33333333333333...","...11111111111111...","...33333333333333...","...11111111111111...","...33333333333333...","...11111111111111...","....................","....................","....................","....................","....................","....................","...................."] },
  { name: "Level 20", rows: ["1..8..111..8..111.11","..8.8..B..8.8..B...B",".8...8...8...8...8..","8...8...8...8...8.8.","...8...8...8...8...8","..8...8...8...8...8.",".8...8...8...8...8..","8...8...8...8...8..1",".8.8...8...8...8..B1","..8...8...8...8....1","1....8...8...8...8..","1B..8...8...8...8.8.","1..8...8...8...8...8","..8...8...8...8...8.",".8...8...8...8...8..","8...8...8...8...8...",".8.8..A..8.8...8..A.","..8..BBB..8...8..BBB","....11111....8..1111","22222222222282222222"] },
  { name: "Level 21", rows: ["..........2.......88",".....44.......2..844","..2.4II4........84.6","....4JJ4....44..8467","....4KK4.2.4114.8467","....4DD4...4EE4.84.6",".2...44....4GG4..844","...........4FF4...88","....2...2...44......","..........2.....2...","..44..............2.",".4BB4..2......2.....",".4AA4......2........",".4MM4...........222.",".4CC4.2.8.8.8.8.2.L2","..44.....8.8.8.82.L2","................2.L2","....2.......2...222.","2......2......2.....","..........2........."] },
  { name: "Level 22", rows: ["..7....822228...7...",".787..28888882.787..","..7..2822222282.7.7.","....282345434282.787","...28234543454282.7.","..28234543B5434282..","..2824543BA1345282..","..282543BA13454282..","..2824345134543282..","..2823454345434282..","...28254345434282...","..7.282345434282....",".787.2822222282...7.","..7...28888882...787","....7..222222.....7.",".7.787......7.......","787.7..7...787......",".7....787...7...7...",".......7.......787..","................7..."] },
  { name: "Level 23", rows: [".......BBAABB.......",".8....BAAMMAAB....8.","..8..BAMMCCMMAB..8..","...8BAMCC..CCMAB8...","...B8MC..E1..CM8B...","..BAM8.11E111.8MAB..",".BAMC.811EE1E8.CMAB.","BAMC.1181EE1811.CMAB","BAMC.1118DD8111.CMAB","AMC.11EED88DEEEE.CMA","AMC.EEEED88DEE11.CMA","BAMC.1118DD8111.CMAB","BAMC..181EE1811.CMAB",".BAMC.8E1EE118.CMAB.","..BAM8.111E11.8MAB..","...B8MC..1E..CM8B...","...8BAMCC..CCMAB8...","..8..BAMMCCMMAB..8..",".8....BAAMMAAB....8.",".......BBAABB......."] },
  { name: "Level 24", rows: ["........F...........",".......G.G......L..L","......F..F......LCCL","......G..LL.....LMML","......F.LIIL.....LL.","..88..G.LJJL......F.",".LLLL.F.L..L......G.",".L..L.G.LLLL.....F..",".LEEL.F..88...GFG...",".L11L.G......F......","..LL..F.....G.......","...F..G.GFGF........","...G...F...G...88...","..GFGFG.....F.LLLL..",".F..F.......G.L..L..","G....G......F.LKKL..","....LL......G.LDDL..","...LBBL.....F..LL...","...LAAL.....G..F....","...L..L......FG....."] },
  { name: "Level 25", rows: ["..BBBBBBBBBBBBBBBB..",".22222222..22222222.","..AAAAAAAAAAAAAAAA..","....................","AAAAAAAA....AAAAAAAA",".22222222..22222222.","MMMMMMMM....MMMMMMMM","....................","..MMMMMMMMMMMMMMMM..",".22222222..22222222.","..CCCCCCCCCCCCCCCC..","....................","CCCCCCCC....CCCCCCCC",".22222222..22222222.","99999999....99999999","....................","..9999999999999999..",".22222222..22222222.","..IIIIIIIIIIIIIIII..","...................."] },
  { name: "Level 26", rows: ["......BFJ..JFB......",".....BGBH..HBGB.....","....BFBAJ..JABFB....","...BGBAMH..HMABGB...","...FBMMMJ..JMMMBF...","...G8AA8H..H8AA8G...","...FBAABJ..JBAABF...","...G8CC8H..H8CC8G...","...FBAABJ..JBAABF...","...GBAABH..HBAABG...","...FBCCBJ..JBCCBF...","...GBAABH..HBAABG...","...FBAABJ..JBAABF...","...G8CC8H..H8CC8G...","...FBAABJ..JBAABF...","...G8AA8H..H8AA8G...",".HJHJHJHJ..JHJHJHJH.",".CMCMCMC....CMCMCMC.","....................","...................."] },
  { name: "Level 27", rows: [".MMMMMMMMMMMMMMMMMM.","MMMMMMM99999MMMMMM2M","MMMMMM999J99JM3MM222","M333M9J9J9JJ9943M222","M433MJ9J999999433M2M","M433MJ9J999999M43MMM","MM43MJ9JJ9J9J9MMMMMM","MMMMMJ9J99JJJ9MMMMMM","MMMMM9J9999999MMMM33","MMMMMM9999999MMMM433","M222MMMKDKKKMM222M44","M2.2MMMKDKKKMM2.2MMM","M2.2MMMD5DKKMM2.2MMM","M222MMMD5DKKMM222MMM","MMJMMMMKDKKKMMMJMMMM","MMJMMMMKDKKKMMMJMMMM","CCJCCCCKDKKKCCCJCCCC","9999999KDKKK99999999",".IIIIIIDKKDKIIIIIII.","...................."] },
  { name: "Level 28", rows: ["....................","....................","....................","....................","..CCC....GG....CCC..","..C2C...G88G...C2C..","..CCC..G.EE.G..CCC..","......G3....3G......",".....G3.HAAH.3G.....","....G..H.AA.H..G....","...G.M.HE88EH.M.G...","..G8E.MA8EE8AM.E8G..","..G8E.MA8EE8AM.E8G..","...G.M.HE88EH.M.G...","....G..H.AA.H..G....",".....G3.HAAH.3G.....","......G3....3G......","..CCC..G.EE.G..CCC..","..C2C...G88G...C2C..","..CCC....GG....CCC.."] },
  { name: "Level 29", rows: ["..........1E1.......",".........1E1E1......",".........11EE1......",".........111E1......",".........111E1......","..........IEI.......","...........I........","..........I..9......","..........I.99......","..........I.I9......","..........II........",".......99.I.........",".......9III.........","........9.I.........",".........I..........",".........I..........","........I...........","........I...........",".......I............",".......I............"] },
  { name: "Level 30", rows: ["33333333333333333333","3HHHCH8283HHHHHHHCH3","3HHCHHH8H3HCHCHCHHC3","3HCHHHH8H3HHHHHHHCH3","3HHHCHIII3HCHHDDDDD3","3HCCHIIIK3HHHHDGFGD3","3HHHHIIII3HHHHDFGFD3","3HCHHK13I3HHHHDDDDD3","3HHHHIIII3HCHHHHHHH3","3HHH1IIII3IHHKKKKKK3","33333333333333333333","3HHHII3II3AHH1A111I3","3HHH1KIII3IHH1A55II3","3HCHIIIAK3IHHAA55513","3CHHII1II3IKH1158513","3HHHAIIII3IHH1188813","3CHIIIIIK31IH1188813","3HHKI3III3IKH11DDD13","3HHIIIIAI3AICHHHHCH3","33333333333333333333"] },
  { name: "Level 31", rows: ["..B.................",".B2B...E.....9......","..B2B.ELE...929.....","...B.D.ELE.A.929....","....DLD.E.A2A.9.....","...M.DLD.1.A2A......","..MLM.D.121.A.......","...MLM.9.121.E......","....M.929.1.ELE.....",".....A.929.D.ELE....","....A2A.9.DLD.E.....","...9.A2A.M.DLD......","..929.A.MLM.D.B.....","...929...MLM.B2B....","....9.....M...B2B...","...............B....","....................","....................","....................","...................."] },
  { name: "Level 32", rows: ["....................","....................",".......B.AA.B.......","......77BAAB77......","K....7DD7777DD7....K",".K...7D8DDDD8D7...K.","2.K..7D8DDDD8D7..K.2",".2.K.7D8DDDD8D7.K.2.","K.2K.7D888888D7.K2.K",".K.K.7DDDDDDDD7.K.K.","2.K...777DD777...K.2",".2K.....7DD7.....K2.","K.K.....7DD7.....K.K",".K......7DD7......K.",".K......7DD7......K.","........7DD7........","........7DD7........","........7DD7........","........7DD7........",".........77........."] },
  { name: "Level 33", rows: ["....................","....................",".......11111........","......1111111.......",".....111111111......",".....133513351......",".....133313331......",".....133313331......",".....111111111......",".....111111111......",".....111111111......",".....111111111......",".....111111111......",".....111111111......",".....111111111......",".....1.1.1.1.1......","....................","....................","....................","...................."] },
  { name: "Level 34", rows: ["....................","....................","....................","88JJ88MM88JJ88MM88JJ","MJHHJMCCMJHHJMCCMJHH","HJMCCMJHHJMCCMJHHJMC","J88MM88JJ88MM88JJ88M","....................","....................","72272272272272272272","87787787787787787787","72272272272272272272","77777777777777777777","28228228228228228228","77777777777777777777","72272272272272272272","87787787787787787787","72272272272272272272","....................","...................."] },
  { name: "Level 35", rows: ["....................","....................","....................","....................","....................",".......EEDDD........",".......E222D........",".......E2L2B........",".......A272B........",".......AAABB........","....................","....................",".........3..........","........343.........",".......34543........","........535.........","........343.........","........454.........","........535.........","........343........."] },
  { name: "Level 36", rows: ["....................","....................","1...3..........3...1","51..3..........3..15","15.3433......3343.51","51.354433..334453.15","15.3F5544334455F3.51","51.3FF75544557FF3.15","15..3F77755777F3..51","51..3F73377337F3..15","15..377357753773..51","51...3777777773...15","15...3777477773...51","51...3777747773...15","1....3577777753....1",".....3457E77543.....","......34577543......",".......333333.......","....................","...................."] },
  { name: "Level 37", rows: [".2.9.2.9.2.9.2.9.2.9",".9.2.9.2.9.2.9.2.9.2",".9.9.9.9.9.9.9.9.9.9",".9.2.9.2.9.2.9.2.9.2",".2.9.2.9.2.9.2.9.2.9","I.9.I.9.I.9.I.9.I.9.","9.I.9.I.9.I.9.I.9.I.","I.9.I.9.I.9.I.9.I.9.","9.I.9.I.9.I.9.I.9.I.","I.9.I.9.I.9.I.9.I.9.",".D.2.D.2.D.2.D.2.D.2",".2.D.2.D.2.D.2.D.2.D",".D.D.D.D.D.D.D.D.D.D",".2.D.2.D.2.D.2.D.2.D",".D.2.D.2.D.2.D.2.D.2","D.K.D.K.D.K.D.K.D.K.","K.D.K.D.K.D.K.D.K.D.","D.K.D.K.D.K.D.K.D.K.","K.D.K.D.K.D.K.D.K.D.","D.K.D.K.D.K.D.K.D.K."] },
  { name: "Level 38", rows: ["45999A1345111AM345MM","34599B1134511BMM345M","93459A1113451AMMM345","99345B5111345B5MMM34","99934A4511134A45MMM3","59993B3451113B345MMM","45999A1345111AM345MM","34599B1134511BMM345M","J3459A1113451AMMM345","....................","....................","....................","....................","....................","....................","....................","22.22.22.22.22.22.22","GFGFGFGFGFGFGFGFGFGF","AMAMAMAMAMAMAMAMAMAM","HIHIHIHIHIHIHIHIHIHI"] },
  { name: "Level 39", rows: ["....................","...22.55555555.22...","...L2543CBBC3452L...","...L2583BHMB3852L...","...L2543BMHB3452L...","...L2543ABBC3452L...","...L2583BHMB3852L...","...L2543BMHB3452L...","...L2543BHMB3452L...","...L2583CBBC3852L...","...L2543BHMB3452L...","...L2543BMHB3452L...","...L2583BHMB3852L...","...L2543BMHB3452L...","...L2543ABBC3452L...","...L2583BHMB3852L...","...22543BMHB34522...","55555543BHMB34555555","84484483BMHB38448448","33333333CBBC33333333"] },
  { name: "Level 40", rows: ["........BB..........","......2.BB..2.......","......2.....2.......","......2.....2.......","......2HHM..2.......","......2.HMMM2.......","......2.H.K.2.......","......2DDKKK2.......","......2DD.552.......","......2B..552.......","......2BB.EE2.......","......2BG..E2.......","......2GGG.E2.......","......2.CCJJ2.......","......21CCJ.2.......","......21DDJ.2.......","......211DH.2.......","......2MMDH.2.......","......2MM.HH2.......","......2222222......."] },
  { name: "Level 41", rows: [".29787..3111..78792.","..2777.333111.7772..","...777.333311.777...","J..787.133331.787..J","JJ.777.113333.777.JJ","2JJ777.111333.777JJ2",".2J787.111133.787J2.","..2777.311113.7772..","...777.331111.777...","H..787.333111.787..H","HH.777.333311.777.HH","2HH777.133331.777HH2",".2H787.113333.787H2.","..2777.111333.7772..","...777.111133.777...","I..787.311113.787..I","II.777.331111.777.II","2II777.333111.777II2",".2I787.333311.787I2.","..2777..3333..7772.."] },
  { name: "Level 42", rows: [".....L..............",".L........L.........","...............L....","..11DDD.............","..1LLLD............L","..1L.LI....EEKKK....","..BLLLI.L..E222K....","..BBBII....E2.2J....","...........M222J.L..","L.....L....MMMJJ....","...................L",".........L..........","....L.........11DDD.","...........L..1LLLD.","..L...........1L.LI.",".....EEKKK....BLLLI.",".....E222K....BBBII.",".L...E2.2J..L.......",".....M222J.....L....","...L.MMMJJ.........L"] },
  { name: "Level 43", rows: ["....................","8..8..8..8..8..8..8.",".2..2..2..2..2..2..2","....................","..8..8..8..8..8..8..","...2..2..2..2..2..2.","....................",".8..8..8..8..8..8..8","..2..2..2..2..2..2..","....................","8..8..8..8..8..8..8.",".2..2..2..2..2..2..2","....................","..8..8..8..8..8..8..","...2..2..2..2..2..2.","....................",".8..8..8..8..8..8..8","..2..2..2..2..2..2..","....................","8..8..8..8..8..8..8."] },
  { name: "Level 44", rows: ["....................","....................",".......33333........","......3HHHMH3.......",".....3M8M8H8H3......",".....3HHHMHHM3......","....3H8H8H8H8H3.....","....3HMHHHHHHH3.....","...3H8H8H8M8M8H3....","...3HHHHHHHHHHH3....","...3M8H8M8H8H8M3....","...3HHHHHHMHMHH3....","...3H8M8H8H8H8M3....","...3HHHHHHHHHHH3....","....3H8H8H8H8H3.....","....3HHHHHHHHH3.....",".....3H8H8M8M3......",".....3MHHHHHH3......","......3HMHHM3.......",".......33333........"] },
  { name: "Level 45", rows: ["BBBBBBBBBBBBBBBBBBBB","B..................B","B..................B","777777777777777777BB","B..................B","B..................B","B..................B","BB777777777777777777","B..................B","B..................B","B..................B","777777777777777777BB","B..................B","B..................B","B..................B","BB777777777777777777","B..................B","B..................B","B..................B","777777777777777777BB"] },
  { name: "Level 46", rows: [".33..44.33.3.54...34",".333..3.....3..3.3.4",".5.44..4434..34..444","5.5343.434.43.4345.4",".4344.4...3..544.543",".3..43..3...43.5..44","3344.334.34..4..4.44","3.3.5.435.3.344.3..4","...3...5......334434","...443...343433..344",".3..434343....443..4","4...334....3443..4.4","..44.4.43.54.3..4444","5..343......53.4.4..","33.434.33445..43.543","....3.4..3.....33..3",".5....335.4.3.4...3.","5..33.4....3...35.5.","....3..35.5.4.......",".4.3...3...4.55..43."] },
  { name: "Level 47", rows: [".....8.LL.....8.....","........L..LL.....8.","..LL....LL..L..LL...","..L..LL.....LL..L...",".LL..L...LL.....LL..","....LL.8..L.........",".LL.......LL.LL.....","..L..........L..LL..","..LL.LL.LL..LL...L..",".....L..L........LL.",".LL.LL.LL....LL.....",".L........8..L...LL.","LL.LL.8.....LL.8..L.","....L.............LL","....LL..LL.....LL...",".LL......L......L...","..L....8.LL.LL..LL..","..LL........L.......","...........LL..8....","...................."] },
  { name: "Level 48", rows: ["22222222222222222222","22222222222222222222","22222222222222222222","22777777777777777722","88777777777777777722","322CCCCCCCCCCCCCC222","322CCCCCCCCCCCCCC888","32227777777777772223","88887777777777772223","32222MMMMMMMMMM22223","32222MMMMMMMMMM88888","32222277777777222223","88888877777777222223","3222222AAAAAA2222223","3222222AAAAAA8888888","32222222777722222223","88888888777722222223","322222222BB222222223","322222222BB222222223","...................."] },
  { name: "Level 49", rows: ["....................","....................","BB33AA33II33JJ33GG33","BB33AA33II33JJ33GG33","BB33AA33II33JJ33GG33","33MM33JJ33KK33EE33FF","33MM33JJ33KK33EE33FF","33MM33JJ33KK33EE33FF","CC339933HH33AA339933","CC339933HH33AA339933","CC339933HH33AA339933","33KK33GG33MM33DD33II","33KK33GG33MM33DD33II","33KK33GG33MM33DD33II","DD33FF33CC331133HH33","DD33FF33CC331133HH33","DD33FF33CC331133HH33","331133EE33BB33GG33JJ","331133EE33BB33GG33JJ","331133EE33BB33GG33JJ"] },
  { name: "Level 50", rows: ["888.8.8.888..1111111",".8..8.8.8.....EEEEE.",".8..888.88.....GGG..",".8..8.8.8.......G...",".8..8.8.888.........","....................","....................","........888.88..88..","...C....8...8.8.8.8.","..CCC...88..8.8.8.8.",".MMMMM..8...8.8.8.8.","AAAAAAA.888.8.8.88..","....................","....................","....................","....................","....................","....................","....................","...................."] }
];

const SAVE_KEYS = { CLASSIC: 'dx_classic', IMMORTAL: 'dx_immortal' };
const HS_KEYS = { CLASSIC: 'dx_hs_classic', IMMORTAL: 'dx_hs_immortal' };

/* --- BorodinART-aligned constants (from dx-ball.ru game.js) ---
   Ball: x += xSpeed*6*delta; paddle: ySpeed*=-1; xSpeed=(x-center)/30
   Pixel equiv @60fps (delta≈1): vy≈±6, vx = offset/5
*/
let W = 1008, H = 860;
let BRICK_W = 48, BRICK_H = 30, OX = 24, OY = 64;
let PADDLE_Y = 808;
let BASE_YS = 9.6;
let MAX_YS = 19;
let MIN_YS = 5.6;
let speedK = 1;
let portrait = false;
const PADDLE_SIZES = [58, 117, 176, 234, 288];
const BALL_R = 8;
const POWER_CHANCE = 8;    // 1/8 like Borodin parseInt(Math.random()*8)==0

const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d', { alpha: false });
const dpr = Math.min(2, window.devicePixelRatio || 1);

function applyLayout() {
  const vw = Math.max(1, window.innerWidth);
  const vh = Math.max(1, window.innerHeight);
  const nextPortrait = vh > vw;
  const prevH = H;
  const prevK = speedK;
  portrait = nextPortrait;
  W = 1008;
  if (portrait) {
    H = Math.round(1008 * vh / vw);
    H = Math.max(1180, Math.min(1680, H));
  } else {
    H = 860;
  }
  BRICK_W = 48;
  BRICK_H = 30;
  OX = 24;
  OY = 64;
  const gridBottom = OY + 20 * BRICK_H;
  PADDLE_Y = portrait ? H - 78 : 808;
  if (PADDLE_Y < gridBottom + 90) PADDLE_Y = gridBottom + 90;
  const gap = Math.max(90, PADDLE_Y - gridBottom);
  speedK = Math.min(1.7, Math.max(1, gap / 160));
  BASE_YS = 9.6 * speedK;
  MAX_YS = 19 * speedK;
  MIN_YS = 5.6 * speedK;
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  document.documentElement.style.setProperty('--aw', String(W));
  document.documentElement.style.setProperty('--ah', String(H));
  if (worldReady && balls && prevH) {
    const sy = H / prevH;
    const rk = speedK / (prevK || 1);
    for (const b of balls) {
      b.y *= sy;
      b.vx *= rk;
      b.vy *= rk;
    }
  }
  if (worldReady && paddle) {
    paddle.y = PADDLE_Y;
    paddle.x = Math.max(0, Math.min(W - paddle.w, paddle.x));
  }
  if (worldReady && bricks) {
    for (const br of bricks) {
      br.x = OX + br.col * BRICK_W;
      br.y = OY + br.row * BRICK_H;
      br.w = BRICK_W;
      br.h = BRICK_H;
    }
  }
}
window.addEventListener('resize', applyLayout);
window.addEventListener('orientationchange', () => setTimeout(applyLayout, 60));

let state = 'name'; // name | menu | playing | paused | clear | gameover | win
let mode = 'CLASSIC';
let menuTitle = 'LHDA-BALL';
let menuSub = '';
let score = 0, lives = 3, levelIndex = 0;
let paddle, balls, bricks, powerups, bullets, particles;
let worldReady = false;
applyLayout();
worldReady = true;
let keys = {}, mouseX = W / 2;
let autoPlay = true;
let menuIdle = 0;
let stickyPending = true;
let clearTimer = 0;
let laserCooldown = 0;
let bonusFlags = { thru: false, magnet: false, shooting: false, fireball: false, fall: false, shball: false };
let paddleSize = 1; // index into PADDLE_SIZES
let activePower = null; // only one falling bonus at a time (Borodin)
let lastTs = 0;

/* --- Palandri SFX (rotate within group) --- */

const SFX = { pala: [], ladrillo: [], rompe: [], power: [], muerte: [], clear: [], jijo: [] };
const RAW = { pala: [], ladrillo: [], rompe: [], power: [], muerte: [], clear: [], jijo: [] };
const sfxLast = { pala: -1, ladrillo: -1, rompe: -1, power: -1, muerte: -1, clear: -1, jijo: -1 };
let decodedOn = null;

async function loadSfx() {
  const res = await fetch("/dxball/sfx/catalog.json?v=timbre1");
  if (!res.ok) return;
  const catalog = await res.json();
  const jobs = [];
  for (const [ev, files] of Object.entries(catalog.events)) {
    if (!RAW[ev]) continue;
    RAW[ev] = [];
    for (const f of files) {
      jobs.push((async () => {
        const r = await fetch("/dxball/sfx/" + f + "?v=timbre1");
        if (!r.ok) return;
        RAW[ev].push(await r.arrayBuffer());
      })());
    }
  }
  await Promise.all(jobs);
  if (window.__dxAudio) decodeInto(window.__dxAudio);
}

function decodeInto(actx) {
  if (!actx || decodedOn === actx) return Promise.resolve();
  decodedOn = actx;
  const jobs = [];
  for (const ev of Object.keys(SFX)) {
    SFX[ev] = [];
    for (const raw of RAW[ev] || []) {
      jobs.push(
        actx.decodeAudioData(raw.slice(0)).then((buf) => { SFX[ev].push(buf); }).catch(() => {}),
      );
    }
  }
  return Promise.all(jobs).then(() => {
    window.__dxSfxReady = Object.values(SFX).reduce((n, a) => n + a.length, 0);
  });
}

function audioCtx() {
  if (!window.__dxAudio) {
    const AC = window.AudioContext || window.webkitAudioContext;
    window.__dxAudio = new AC();
  }
  return window.__dxAudio;
}

function unlockAudio() {
  const actx = audioCtx();
  if (actx.state === "suspended") actx.resume();
  decodeInto(actx);
}

function mix() {
  if (!window.__dxMix) window.__dxMix = { burst: Object.create(null), queue: [], playing: false, now: '', src: null, token: 0 };
  return window.__dxMix;
}

function playSfx(ev) {
  const box = mix();
  if (box.playing && box.now === 'clear' && ev !== 'clear') return;
  if (ev === 'muerte' || ev === 'clear') {
    box.burst = Object.create(null);
    box.burst[ev] = true;
    box.queue = [];
    if (box.src) {
      try { box.src.onended = null; box.src.stop(); } catch { /* already ended */ }
      box.src = null;
      box.playing = false;
      box.now = '';
      box.token++;
    }
    return;
  }
  if (ev === 'jijo') {
    if (box.playing && (box.now === 'clear' || box.now === 'muerte')) return;
    box.burst = { jijo: true };
    return;
  }
  if (box.burst.jijo) return;
  box.burst[ev] = true;
}

function orderBurst(b) {
  if (b.muerte) return ['muerte'];
  if (b.clear) return ['clear'];
  if (b.jijo) return ['jijo'];
  const ave = !!b.pala;
  const palan = !!b.ladrillo;
  const ponzi = !!b.rompe;
  if (!ave && !palan && !ponzi) return b.power ? ['power'] : [];
  if (!((ave && palan) || (ave && ponzi) || (palan && ponzi))) {
    if (ave) return ['pala'];
    if (palan) return ['ladrillo'];
    return ['rompe'];
  }
  const steps = [];
  if (ave) steps.push('pala');
  if (palan) steps.push('ladrillo');
  if (ave) steps.push('pala');
  if (ponzi) steps.push('rompe');
  return steps;
}

function pumpSfx() {
  const box = mix();
  if (box.playing) return;
  const ev = box.queue.shift();
  if (!ev) return;
  const actx = window.__dxAudio;
  const list = SFX[ev];
  if (!actx || !list || !list.length) {
    pumpSfx();
    return;
  }
  if (actx.state === 'suspended') actx.resume();
  const src = actx.createBufferSource();
  src.buffer = list[0];
  const gain = actx.createGain();
  gain.gain.value = 0.95;
  src.connect(gain);
  gain.connect(actx.destination);
  const token = ++box.token;
  box.playing = true;
  box.now = ev;
  box.src = src;
  const done = () => {
    if (box.token !== token) return;
    box.token++;
    box.playing = false;
    box.now = '';
    box.src = null;
    pumpSfx();
  };
  src.onended = done;
  const extra = ev === 'clear' ? 700 : 40;
  setTimeout(done, Math.ceil((list[0].duration || 0.45) * 1000) + extra);
  try { src.start(); } catch { done(); return; }
  window.__dxLastSfx = ev;
}

function flushSfx() {
  const box = mix();
  if (box.playing && box.now === 'clear') {
    box.burst = Object.create(null);
    return;
  }
  const steps = orderBurst(box.burst);
  box.burst = Object.create(null);
  if (!steps.length) return;
  if (!box.playing) {
    box.queue = steps;
    pumpSfx();
    return;
  }
  box.queue = steps[0] === box.now ? steps.slice(1) : steps;
}
loadSfx();

function loadSave(m) {
  try { return JSON.parse(localStorage.getItem(SAVE_KEYS[m]) || 'null'); }
  catch { return null; }
}
function saveGame() {
  const data = { levelIndex, score, lives: lives === Infinity ? -1 : lives, paddleSize, mode, bonusFlags: { magnet: bonusFlags.magnet, shooting: bonusFlags.shooting } };
  localStorage.setItem(SAVE_KEYS[mode], JSON.stringify(data));
  refreshContinueBtns();
}
function clearSave(m) { localStorage.removeItem(SAVE_KEYS[m]); refreshContinueBtns(); }
function getHS(m) { return +(localStorage.getItem(HS_KEYS[m]) || 0); }
function setHS(m, v) { if (v > getHS(m)) localStorage.setItem(HS_KEYS[m], String(v)); }
function refreshContinueBtns() {}

const RANK_KEY = 'dx_rank_v1';
const NAME_KEY = 'dx_player_name';
let playerName = '';
let runToken = 0;

function cleanName(s) {
  return String(s || '').replace(/[\u0000-\u001f]/g, '').replace(/\s+/g, ' ').trim().slice(0, 16);
}
function nameKey(s) {
  return cleanName(s).toLocaleLowerCase('es');
}
function collapseRank(rows) {
  const best = new Map();
  for (const r of rows) {
    const key = nameKey(r.name);
    if (!key) continue;
    const prev = best.get(key);
    if (!prev || r.score > prev.score || (r.score === prev.score && r.at >= prev.at)) best.set(key, r);
  }
  return [...best.values()].sort((a, b) => b.score - a.score || a.at - b.at).slice(0, 12);
}
function loadRank() {
  try {
    const raw = JSON.parse(localStorage.getItem(RANK_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    const rows = collapseRank(raw
      .filter((r) => r && typeof r.name === 'string' && Number.isFinite(+r.score))
      .map((r) => ({
        name: cleanName(r.name),
        score: Math.max(0, Math.floor(+r.score)),
        mode: r.mode === 'IMMORTAL' ? 'IMMORTAL' : 'CLASSIC',
        at: +r.at || 0,
        token: r.token || 0,
      }))
      .filter((r) => r.name && r.score > 0));
    if (raw.length !== rows.length) saveRank(rows);
    return rows;
  } catch { return []; }
}
function saveRank(rows) {
  try { localStorage.setItem(RANK_KEY, JSON.stringify(rows.slice(0, 12))); } catch { /* ignore */ }
}
function commitRank() {
  if (!playerName || !(score > 0) || !runToken) return;
  const next = {
    name: playerName,
    score: Math.floor(score),
    mode,
    at: Date.now(),
    token: runToken,
  };
  const rows = loadRank();
  const prev = rows.find((r) => nameKey(r.name) === nameKey(playerName));
  if (prev && prev.score > next.score) return;
  saveRank(collapseRank(rows.filter((r) => nameKey(r.name) !== nameKey(playerName)).concat(next)));
}
function scoreLine() {
  const rows = loadRank();
  const i = rows.findIndex((r) => nameKey(r.name) === nameKey(playerName) && r.score === Math.floor(score));
  const place = i >= 0 ? ' · #' + (i + 1) : '';
  return playerName + ' · ' + score.toLocaleString('es-AR') + place;
}
function openNameGate() {
  state = 'name';
  let gate = document.getElementById('name-gate');
  if (!gate) {
    gate = document.createElement('form');
    gate.id = 'name-gate';
    gate.className = 'name-gate';
    gate.setAttribute('autocomplete', 'off');
    gate.innerHTML =
      '<div class="name-card">' +
      '<h1>LHDA-BALL</h1>' +
      '<p>Poné tu nombre para la tabla y el ranking.</p>' +
      '<input name="player" maxlength="16" enterkeyhint="done" autocapitalize="words" autocomplete="nickname" placeholder="Tu nombre" aria-label="Tu nombre" required />' +
      '<div class="name-err"></div>' +
      '<button type="submit">ENTRAR</button>' +
      '</div>';
    gate.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = gate.querySelector('input');
      const err = gate.querySelector('.name-err');
      const name = cleanName(input.value);
      if (!name) {
        gate.dataset.bad = '1';
        err.textContent = 'El nombre es obligatorio.';
        input.focus();
        return;
      }
      playerName = name;
      try { localStorage.setItem(NAME_KEY, name); } catch { /* ignore */ }
      gate.dataset.bad = '0';
      err.textContent = '';
      gate.hidden = true;
      state = 'menu';
      showMenu('LHDA-BALL', name);
      unlockAudio();
    });
    document.body.appendChild(gate);
  }
  const input = gate.querySelector('input');
  const err = gate.querySelector('.name-err');
  if (!input.value) {
    try { input.value = localStorage.getItem(NAME_KEY) || ''; } catch { /* ignore */ }
  }
  gate.dataset.bad = '0';
  if (err) err.textContent = '';
  gate.hidden = false;
  setTimeout(() => input.focus(), 40);
}

/* Brick charset: '.'=0, '1'-'9'=1-9, 'A'-'M'=10-22 — BorodinART default.bds */
const BDS_CHARS = '.123456789ABCDEFGHIJKLM';
const BDS_COLORS = {
  1:'#c8d0dc', 2:'#8a94a6', 3:'#e8c547', 4:'#d4a017', 5:'#b8860b',
  6:'#a8e6ff', 7:'rgba(168,230,255,.15)', 8:'#ff3b3b', 9:'#ff6b6b', 10:'#ff8c42',
  11:'#4da3ff', 12:'#3d7dd6', 13:'#9b59b6', 14:'#8e44ad', 15:'#2ecc71',
  16:'#27ae60', 17:'#e67e22', 18:'#f1c40f', 19:'#e74c3c', 20:'#1abc9c',
  21:'#95a5a6', 22:'#3498db'
};

/* ARS banknote brick sprites — hardness scales with denomination */
const BILL_META = {
  100:   { file: '100_guanaco.png',  hits: 1 },
  200:   { file: '200_whale.png',    hits: 1 },
  500:   { file: '500_jaguar.png',   hits: 2 },
  1000:  { file: '1000_hornero.png', hits: 2 },
  2000:  { file: '2000_deer.png',    hits: 3 },
  10000: { file: '10000_eva.png',    hits: Infinity } // steel / memorial
};
const BILL_LADDER = [100, 200, 500, 1000, 2000, 10000];
const BILL_BASE = '/dxball/bills/';
const BILL_IMGS = {};
let billsReady = false;

function billDenomForType(t) {
  // Hardness map (as discussed): higher ARS → harder brick
  if (t === 2 || t === 21) return 10000;          // steel
  if (t === 3) return 2000;                       // 3-hit gold chain start
  if (t === 4) return 1000;
  if (t === 5) return 500;
  if (t === 7 || t === 6) return 200;             // glass family
  if (t === 8) return 1000;                       // bomb
  // colored one-hits → soft→mid denoms by type palette
  const soft = {
    1:100, 9:100, 10:200, 11:200, 12:500,
    13:500, 14:1000, 15:1000, 16:2000, 17:200,
    18:500, 19:1000, 20:2000, 22:100
  };
  return soft[t] || BILL_LADDER[(Math.abs(t) || 1) % 5];
}

function loadBills() {
  const embedded = (typeof BILL_EMBEDDED !== 'undefined') ? BILL_EMBEDDED : null;
  const jobs = Object.entries(BILL_META).map(([denom, meta]) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => { BILL_IMGS[denom] = img; resolve(); };
    img.onerror = () => reject(new Error('bill load ' + meta.file));
    img.src = (embedded && embedded[meta.file]) ? embedded[meta.file] : (BILL_BASE + meta.file);
  }));
  return Promise.all(jobs).then(() => { billsReady = true; }).catch(e => console.warn(e));
}

function drawBillCover(img, x, y, w, h, alpha) {
  if (!img || !img.width) return false;
  const br = w / Math.max(1, h);
  // Slice through the portrait instead of squashing the whole note.
  let sh = img.height * 0.46;
  let sw = sh * br;
  if (sw > img.width * 0.92) {
    sw = img.width * 0.92;
    sh = sw / br;
  }
  const sx = (img.width - sw) / 2;
  const sy = Math.max(0, Math.min(img.height - sh, img.height * 0.30));
  ctx.save();
  if (alpha != null && alpha < 1) ctx.globalAlpha = alpha;
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
  ctx.restore();
  return true;
}

function bdsType(ch) {
  const i = BDS_CHARS.indexOf(ch);
  return i < 0 ? 0 : i;
}

const POWER_META = {
  0:  { name: 'LIFE',  label: '1UP' },
  1:  { name: 'NEXT',  label: 'NEXT' },
  2:  { name: 'ZAP',   label: 'ZAP' },
  3:  { name: 'SLOW',  label: 'SLOW' },
  4:  { name: 'MEGA',  label: 'MEGA' },
  5:  { name: 'THRU',  label: 'THRU' },
  6:  { name: 'BOMBS', label: 'BOOM' },
  7:  { name: 'FIRE',  label: 'FIRE' },
  8:  { name: 'LASER', label: 'GUN' },
  9:  { name: 'STICKY',label: 'MAG' },
  10: { name: 'EXPAND',label: 'BIG' },
  11: { name: 'SHRINK',label: 'SML' },
  12: { name: 'MULTI', label: '×3' },
  13: { name: 'KILL',  label: 'DIE' },
  15: { name: 'FAST',  label: 'FAST' },
  16: { name: 'TINY',  label: 'TINY' },
  17: { name: 'DROP',  label: 'DROP' },
  18: { name: 'SHADOW',label: 'SHAD' }
};

function makePaddle() {
  const w = PADDLE_SIZES[paddleSize] || 117;
  return { x: Math.max(0, Math.min(W - w, mouseX - w / 2)), y: PADDLE_Y, w, h: 18 };
}

function makeBall(sticky) {
  const offset = sticky ? paddle.w * 0.45 : paddle.w / 2;
  return {
    x: paddle.x + offset,
    y: paddle.y - BALL_R - 1,
    vx: 0, vy: 0,
    r: bonusFlags.shball ? 6 : BALL_R,
    sticky: !!sticky,
    magnetOff: sticky ? offset : 0,
    fire: false,
    dead: false
  };
}

function resetBonusFlags() {
  bonusFlags = { thru: false, magnet: false, shooting: false, fireball: false, fall: false, shball: false };
}

function buildLevel(idx) {
  const layout = LEVELS[idx % LEVELS.length];
  const rows = layout.rows;
  bricks = [];
  for (let r = 0; r < rows.length; r++) {
    for (let c = 0; c < rows[r].length; c++) {
      const t = bdsType(rows[r][c]);
      if (!t) continue;
      const denom = billDenomForType(t);
      const hits = BILL_META[denom].hits;
      bricks.push({
        x: OX + c * BRICK_W, y: OY + r * BRICK_H,
        w: BRICK_W, h: BRICK_H,
        type: t, col: c, row: r,
        color: BDS_COLORS[t] || '#4da3ff',
        bill: denom,
        hp: Number.isFinite(hits) ? hits : null,
        alive: true
      });
    }
  }
}

function startNew(m) {
  if (!playerName) { openNameGate(); return; }
  mode = m;
  score = 0;
  lives = m === 'IMMORTAL' ? Infinity : 3;
  levelIndex = 0;
  paddleSize = 1;
  runToken = Date.now();
  resetBonusFlags();
  clearSave(m);
  beginLevel();
}

function continueMode(m) {
  const s = loadSave(m);
  if (!s) return;
  if (!playerName) { openNameGate(); return; }
  mode = m;
  runToken = Date.now();
  score = s.score || 0;
  lives = m === 'IMMORTAL' ? Infinity : (s.lives < 0 ? 3 : (s.lives ?? 3));
  levelIndex = s.levelIndex || 0;
  paddleSize = s.paddleSize ?? 1;
  resetBonusFlags();
  if (s.bonusFlags) {
    bonusFlags.magnet = !!s.bonusFlags.magnet;
    bonusFlags.shooting = !!s.bonusFlags.shooting;
  }
  beginLevel();
}

function beginLevel() {
  paddle = makePaddle();
  balls = [makeBall(true)];
  powerups = [];
  bullets = [];
  particles = [];
  activePower = null;
  stickyPending = true;
  laserCooldown = 0;
  // clear transient ball powers each level start (Borodin setPaddle)
  bonusFlags.thru = bonusFlags.fireball = bonusFlags.fall = bonusFlags.shball = false;
  // keep magnet/shooting? Borodin clears ALL on setPaddle — match that
  resetBonusFlags();
  buildLevel(levelIndex);
  state = 'playing';
  launchBalls();
  updateHud();
  saveGame();
}

function updateHud() {}

function launchBalls() {
  for (const b of balls) {
    if (b.sticky) {
      b.sticky = false;
      b.magnetOff = 0;
      // Borodin: on release, keep ySpeed=-1 and xSpeed=(x-center)/30 → pixels /5
      b.vy = -BASE_YS;
      b.vx = (b.x - (paddle.x + paddle.w / 2)) / 5;
      if (Math.abs(b.vx) < 0.3) b.vx = (Math.random() < 0.5 ? -0.8 : 0.8);
    }
  }
  stickyPending = false;
}

function fireLasers() {
  if (!bonusFlags.shooting || laserCooldown > 0) return;
  laserCooldown = 12;
  bullets.push({ x: paddle.x + 6, y: paddle.y, vy: -16, dead: false });
  bullets.push({ x: paddle.x + paddle.w - 6, y: paddle.y, vy: -16, dead: false });
}

function loseLife(fromKillPower) {
  playSfx('muerte');
  commitRank();
  if (mode === 'CLASSIC') {
    lives -= 1;
    if (lives <= 0) {
      setHS(mode, score);
      commitRank();
      clearSave(mode);
      state = 'gameover';
      showMenu('GAME OVER', scoreLine());
      return;
    }
  }
  // sticky respawn (Borodin setPaddle)
  paddleSize = 1;
  resetBonusFlags();
  paddle = makePaddle();
  balls = [makeBall(true)];
  stickyPending = true;
  powerups = [];
  activePower = null;
  bullets = [];
  launchBalls();
  updateHud();
  saveGame();
}

function destructibleLeft() {
  return bricks.some(b => b.alive && b.type !== 2);
}

function spawnPower(x, y) {
  if (activePower) return;
  if (Math.floor(Math.random() * POWER_CHANCE) !== 0) return;
  let t = Math.floor(Math.random() * 18);
  if (t === 14) t = 13; // Borodin remaps empty slots to death
  if (!POWER_META[t]) t = 12;
  const ref = balls.find(b => !b.sticky) || balls[0];
  activePower = {
    x, y, w: 46, h: 22,
    vx: ref ? ref.vx * 0.35 : 0,
    vy: -6.4,
    weight: 0.19,
    type: t,
    meta: POWER_META[t]
  };
  powerups = [activePower];
}

function clampBallSpeed(b) {
  let spd = Math.hypot(b.vx, b.vy);
  if (spd < 0.01) { b.vx = 0; b.vy = -BASE_YS; return; }
  if (spd < MIN_YS) {
    const s = MIN_YS / spd;
    b.vx *= s; b.vy *= s;
  } else if (spd > MAX_YS) {
    const s = MAX_YS / spd;
    b.vx *= s; b.vy *= s;
  }
  // avoid near-horizontal
  if (Math.abs(b.vy) < 2) b.vy = (b.vy < 0 ? -2 : 2) * Math.sign(b.vy || -1);
}

function reflectPaddle(ball) {
  // Exact BorodinART paddle formula (pixel-scaled)
  ball.vy = -Math.abs(ball.vy || BASE_YS);
  ball.vx = (ball.x - (paddle.x + paddle.w / 2)) / 5;
  clampBallSpeed(ball);
  if (bonusFlags.magnet) {
    ball.sticky = true;
    ball.magnetOff = ball.x - paddle.x;
    stickyPending = true;
  }
}

function hitBrick(brick, fromBomb, quiet) {
  const root = !hitBrick._depth;
  if (root) {
    hitBrick._n = 0;
    hitBrick._ev = null;
  }
  hitBrick._depth = (hitBrick._depth || 0) + 1;
  const say = (ev) => {
    hitBrick._n += 1;
    hitBrick._ev = ev;
  };
  if (brick && brick.alive) {
    const t = brick.type;
    if (t === 2) {
      say('ladrillo');
    } else {
      let destroyed = false;
      if (t === 3) { brick.type = 4; brick.color = BDS_COLORS[4]; brick.bill = 1000; score += 10; say('ladrillo'); }
      else if (t === 4) { brick.type = 5; brick.color = BDS_COLORS[5]; brick.bill = 500; score += 10; say('ladrillo'); }
      else if (t === 5) { brick.alive = false; destroyed = true; score += 10; say('rompe'); }
      else if (t === 6) { brick.alive = false; destroyed = true; score += 10; say('rompe'); }
      else if (t === 7) { brick.type = 6; brick.color = BDS_COLORS[6]; brick.bill = 200; score += 10; say('ladrillo'); }
      else if (t === 8) {
        brick.alive = false;
        destroyed = true;
        score += 10;
        say('rompe');
        if (!fromBomb) {
          for (const nb of bricks) {
            if (!nb.alive || nb === brick) continue;
            if (Math.abs(nb.col - brick.col) <= 1 && Math.abs(nb.row - brick.row) <= 1) {
              hitBrick(nb, true, true);
            }
          }
        }
      } else if (t === 21) {
        brick.type = 2;
        brick.color = BDS_COLORS[2];
        brick.bill = 10000;
        brick.hp = null;
        score += 10;
        say('ladrillo');
      } else if (brick.hp != null && brick.hp > 1) {
        brick.hp -= 1;
        const i = BILL_LADDER.indexOf(brick.bill);
        if (i > 0) brick.bill = BILL_LADDER[i - 1];
        score += 10;
        say('ladrillo');
      } else {
        brick.alive = false;
        destroyed = true;
        score += 10;
        say('rompe');
      }
      if (!fromBomb) {
        const left = brick.alive ? brick.type : 0;
        if (left !== 7 && left !== 2) spawnPower(brick.x + brick.w / 2, brick.y + brick.h / 2);
      }
      void destroyed;
    }
  }
  hitBrick._depth -= 1;
  if (!root) return null;
  const n = hitBrick._n;
  const ev = hitBrick._ev;
  if (!quiet) {
    if (n > 1) playSfx('jijo');
    else if (ev) playSfx(ev);
  }
  return { n, ev };
}

function addSweep(b, n, ev) {
  b.sweep = (b.sweep || 0) + (n || 1);
  if (ev) b.sweepEv = ev;
  b.sweepIdle = 0;
}
function closeSweep(b, force) {
  if (!b || !b.sweep) return;
  if (!force) {
    b.sweepIdle = (b.sweepIdle || 0) + 1;
    if (b.sweepIdle < 4) return;
  }
  if (b.sweep > 1) playSfx('jijo');
  else if (b.sweepEv) playSfx(b.sweepEv);
  b.sweep = 0;
  b.sweepEv = '';
  b.sweepIdle = 0;
}

function applyPower(type) {
  playSfx('power');
  score += 100;
  switch (type) {
    case 0: // LIFE
      if (mode === 'CLASSIC' && lives < 9) lives += 1;
      else score += 500;
      break;
    case 1: // NEXT level
      state = 'clear';
      clearTimer = 40;
      break;
    case 2: // ZAP — steel→breakable(20), glass7→6
      for (const br of bricks) {
        if (!br.alive) continue;
        if (br.type === 2) { br.type = 20; br.color = BDS_COLORS[20]; }
        if (br.type === 7) { br.type = 6; br.color = BDS_COLORS[6]; }
      }
      break;
    case 3: // SLOW
      for (const b of balls) { b.vx *= 0.5; b.vy *= 0.5; clampBallSpeed(b); }
      break;
    case 4: // MEGA — neighbors of bombs become bombs
      {
        const toBomb = [];
        for (const br of bricks) {
          if (!br.alive || br.type !== 8) continue;
          for (const nb of bricks) {
            if (!nb.alive || nb === br) continue;
            if (Math.abs(nb.col - br.col) + Math.abs(nb.row - br.row) === 1) toBomb.push(nb);
          }
        }
        for (const nb of toBomb) { nb.type = 8; nb.color = BDS_COLORS[8]; }
      }
      break;
    case 5: // THRU
      bonusFlags.thru = true;
      break;
    case 6: // detonate all bombs
      for (const br of bricks.slice()) {
        if (br.alive && br.type === 8) hitBrick(br, false);
      }
      break;
    case 7: // FIREBALL
      bonusFlags.fireball = true;
      bonusFlags.shball = false;
      for (const b of balls) b.fire = true;
      break;
    case 8: // LASER
      bonusFlags.shooting = true;
      break;
    case 9: // MAGNET / sticky
      bonusFlags.magnet = true;
      break;
    case 10: // EXPAND
      if (paddleSize < PADDLE_SIZES.length - 1) {
        const cx = paddle.x + paddle.w / 2;
        paddleSize++;
        paddle = makePaddle();
        paddle.x = cx - paddle.w / 2;
      }
      break;
    case 11: // SHRINK
      if (paddleSize > 0) {
        const cx = paddle.x + paddle.w / 2;
        paddleSize--;
        paddle = makePaddle();
        paddle.x = cx - paddle.w / 2;
      }
      break;
    case 12: // MULTI — duplicate each ball (+slight spread)
      {
        const extras = [];
        for (const b of balls) {
          if (b.sticky || extras.length >= 6) continue;
          extras.push({
            ...b,
            vx: b.vx - 2,
            vy: b.vy / 1.15,
            sticky: false,
            magnetOff: 0
          });
          extras.push({
            ...b,
            vx: b.vx + 2,
            vy: (b.vy + 2) / 1.15,
            sticky: false,
            magnetOff: 0
          });
        }
        balls.push(...extras.slice(0, 6));
        while (balls.length > 8) balls.pop();
      }
      break;
    case 13: // KILL
      loseLife(true);
      break;
    case 15: // FAST
      for (const b of balls) { b.vx *= 2; b.vy *= 2; clampBallSpeed(b); }
      break;
    case 16: // TINY
      {
        const cx = paddle.x + paddle.w / 2;
        paddleSize = 0;
        paddle = makePaddle();
        paddle.x = cx - paddle.w / 2;
      }
      break;
    case 17: // DROP
      bonusFlags.fall = true;
      break;
    case 18: // SHADOW ball
      bonusFlags.shball = true;
      bonusFlags.fireball = false;
      for (const b of balls) { b.r = 3.5; b.fire = false; }
      break;
  }
  updateHud();
}

function dropBricksOneRow() {
  // Borodin fall: shift bricks down into empty cells
  const grid = Array.from({ length: 20 }, () => Array(20).fill(null));
  for (const br of bricks) {
    if (br.alive) grid[br.row][br.col] = br;
  }
  for (let y = 19; y > 0; y--) {
    for (let x = 0; x < 20; x++) {
      if (!grid[y][x] && grid[y - 1][x]) {
        const br = grid[y - 1][x];
        grid[y][x] = br;
        grid[y - 1][x] = null;
        br.row = y;
        br.y = OY + y * BRICK_H;
      }
    }
  }
}

function resolveBrickCollision(b, br) {
  // side vs top/bottom (Borodin overlap test)
  const fromL = b.x - (br.x - 5);
  const fromR = (br.x + br.w + 5) - b.x;
  const fromT = b.y - (br.y - 5);
  const fromB = (br.y + br.h + 5) - b.y;
  const hitSide = (fromL < fromT && fromL < fromB) || (fromR < fromT && fromR < fromB);
  const isSteel = br.type === 2 || br.type === 21;
  if (hitSide) {
    if (!bonusFlags.thru || isSteel) b.vx *= -1;
    b.x = b.x < br.x + br.w / 2 ? br.x - b.r : br.x + br.w + b.r;
  } else {
    if (!bonusFlags.thru || isSteel) b.vy *= -1;
    b.y = b.y < br.y + br.h / 2 ? br.y - b.r : br.y + br.h + b.r;
  }
}

function update(dt) {
  if (state === 'clear') {
    clearTimer -= dt;
    if (clearTimer <= 0) {
      levelIndex += 1;
      if (levelIndex >= LEVELS.length) {
        setHS(mode, score);
        commitRank();
        clearSave(mode);
        state = 'win';
        showMenu('YOU WIN', scoreLine());
        return;
      }
      score += 1000 + 100 * levelIndex;
      commitRank();
      paddleSize = 1;
      resetBonusFlags();
      beginLevel();
    }
    return;
  }
  if (state !== 'playing') return;

  // paddle: follows the ball until the player moves
  let px = mouseX - paddle.w / 2;
  if (autoPlay && balls.length) {
    let lead = balls[0];
    for (const b of balls) if (b.y > lead.y) lead = b;
    px = lead.x - paddle.w / 2;
  }
  if (keys['ArrowLeft'] || keys['a'] || keys['A']) { autoPlay = false; px = paddle.x - 14 * dt; }
  if (keys['ArrowRight'] || keys['d'] || keys['D']) { autoPlay = false; px = paddle.x + 14 * dt; }
  paddle.x = Math.max(0, Math.min(W - paddle.w, px));

  if (laserCooldown > 0) laserCooldown -= dt;

  for (const b of balls) {
    if (b.sticky) {
      const off = b.magnetOff || paddle.w / 2;
      b.x = paddle.x + Math.max(b.r, Math.min(paddle.w - b.r, off));
      b.y = paddle.y - b.r - 1;
      b.vy = -BASE_YS;
      b.vx = (b.x - (paddle.x + paddle.w / 2)) / 5;
      continue;
    }

    b.x += b.vx * dt;
    b.y += b.vy * dt;

    // walls — same "ave" as the paddle
    let wall = false;
    if (b.x - b.r < 4) {
      b.x = b.r + 4;
      if (b.vx < 0) { b.vx = -b.vx; wall = true; }
    }
    if (b.x + b.r > W - 4) {
      b.x = W - 4 - b.r;
      if (b.vx > 0) { b.vx = -b.vx; wall = true; }
    }
    if (b.y - b.r < 4) {
      b.y = b.r + 4;
      if (b.vy < 0) { b.vy = -b.vy; wall = true; }
    }
    if (wall) playSfx('pala');

    if (b.y - b.r > H) { closeSweep(b, true); b.dead = true; continue; }

    // paddle
    if (b.vy > 0 &&
        b.y + b.r >= paddle.y && b.y - b.r <= paddle.y + paddle.h &&
        b.x >= paddle.x - 2 && b.x <= paddle.x + paddle.w + 2) {
      closeSweep(b, true);
      b.y = paddle.y - b.r;
      reflectPaddle(b);
      playSfx('pala');
      if (bonusFlags.fall) dropBricksOneRow();
    }

    // bricks — spatial narrow by row/col
    let swept = false;
    if (b.y > OY - 20 && b.y < OY + 20 * BRICK_H + 20) {
      if (bonusFlags.thru) {
        if (!b.passed) b.passed = new WeakSet();
        const hit = [];
        for (const br of bricks) {
          if (!br.alive || b.passed.has(br)) continue;
          if (b.x + b.r > br.x && b.x - b.r < br.x + br.w &&
              b.y + b.r > br.y && b.y - b.r < br.y + br.h) hit.push(br);
        }
        hit.sort((p, q) => {
          const dp = (p.x + p.w / 2 - b.x) * b.vx + (p.y + p.h / 2 - b.y) * b.vy;
          const dq = (q.x + q.w / 2 - b.x) * b.vx + (q.y + q.h / 2 - b.y) * b.vy;
          return dp - dq;
        });
        if (hit.length) swept = true;
        for (const br of hit) {
          b.passed.add(br);
          if (br.type === 2) {
            resolveBrickCollision(b, br);
            addSweep(b, 1, 'ladrillo');
            break;
          }
          if (bonusFlags.fireball) br.type = 8;
          const res = hitBrick(br, false, true);
          addSweep(b, (res && res.n) || 1, res && res.ev);
        }
      } else {
        for (const br of bricks) {
          if (!br.alive) continue;
          if (b.x + b.r > br.x && b.x - b.r < br.x + br.w &&
              b.y + b.r > br.y && b.y - b.r < br.y + br.h) {
            if (bonusFlags.fireball) {
              br.type = 8;
              hitBrick(br);
              if (br.alive && (br.type === 2 || br.type === 21)) resolveBrickCollision(b, br);
              else if (!bonusFlags.thru) resolveBrickCollision(b, br);
            } else if (br.type === 2) {
              resolveBrickCollision(b, br);
              playSfx('ladrillo');
            } else {
              hitBrick(br);
              resolveBrickCollision(b, br);
            }
            clampBallSpeed(b);
            break;
          }
        }
      }
    }
    if (!swept) closeSweep(b, false);
  }

  balls = balls.filter(b => !b.dead);
  if (balls.length === 0) loseLife(false);

  // bullets
  for (const bu of bullets) {
    bu.y += bu.vy * dt;
    if (bu.y < 0) bu.dead = true;
    else {
      for (const br of bricks) {
        if (!br.alive) continue;
        if (bu.x >= br.x && bu.x <= br.x + br.w && bu.y >= br.y && bu.y <= br.y + br.h) {
          if (br.type !== 2) hitBrick(br);
          else playSfx('ladrillo');
          bu.dead = true;
          break;
        }
      }
    }
  }
  bullets = bullets.filter(bu => !bu.dead);

  // powerups — gravity arc
  for (const p of powerups) {
    p.vy += p.weight * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    if (p.x < 20) { p.x = 20; p.vx *= -1; }
    if (p.x > W - 20) { p.x = W - 20; p.vx *= -1; }
    if (p.y > H) { p.dead = true; activePower = null; }
    if (p.y + p.h >= paddle.y && p.y < paddle.y + paddle.h + 8 &&
        p.x + p.w / 2 > paddle.x - 10 && p.x - p.w / 2 < paddle.x + paddle.w + 10) {
      const t = p.type;
      p.dead = true;
      activePower = null;
      applyPower(t);
    }
  }
  powerups = powerups.filter(p => !p.dead);
  if (!powerups.length) activePower = null;

  bricks = bricks.filter(b => b.alive);

  if (!destructibleLeft()) {
    state = 'clear';
    const clip = (SFX.clear[0] && SFX.clear[0].duration) || 2.4;
    clearTimer = Math.ceil((clip + 0.45) * 60);
    playSfx('clear');
    saveGame();
  }
  updateHud();
}

function denomLabel(n) {
  const v = Number(n);
  if (!Number.isFinite(v)) return '';
  return v.toLocaleString('es-AR');
}

function drawDenom(br, x, y, bw, bh) {
  const label = denomLabel(br.bill);
  if (!label) return;
  let size = Math.max(9, Math.min(13, Math.floor(bh * 0.38)));
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.font = `700 ${size}px "Liberation Sans", sans-serif`;
  while (size > 8 && ctx.measureText(label).width > bw * 0.72) {
    size -= 1;
    ctx.font = `700 ${size}px "Liberation Sans", sans-serif`;
  }
  const tw = ctx.measureText(label).width;
  const pad = 2;
  ctx.fillStyle = 'rgba(255,248,230,.88)';
  ctx.fillRect(x + bw - tw - pad * 2 - 1, y + bh - size - pad * 2, tw + pad * 2, size + pad);
  ctx.fillStyle = '#1a1408';
  ctx.fillText(label, x + bw - pad - 1, y + bh - pad);
}

function roundRect(x, y, w, h, r) {
  const radius = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function draw() {
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#121a2e');
  bg.addColorStop(1, '#070b14');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  for (const br of bricks) {
    const img = BILL_IMGS[String(br.bill)] || BILL_IMGS[br.bill];
    const x = br.x + 1, y = br.y + 1, bw = br.w - 2, bh = br.h - 2;
    ctx.fillStyle = 'rgba(0,0,0,.35)';
    ctx.fillRect(x + 1.5, y + 2.5, bw, bh);
    ctx.save();
    roundRect(x, y, bw, bh, 2);
    ctx.clip();
    if (br.type === 7) {
      if (img) drawBillCover(img, x, y, bw, bh, 0.28);
      ctx.fillStyle = 'rgba(186, 214, 230, .34)';
      ctx.fillRect(x, y, bw, bh);
    } else if (br.type === 2) {
      const metal = ctx.createLinearGradient(x, y, x, y + bh);
      metal.addColorStop(0, '#d5dbe6');
      metal.addColorStop(0.45, '#8b93a3');
      metal.addColorStop(1, '#5c6574');
      ctx.fillStyle = metal;
      ctx.fillRect(x, y, bw, bh);
      if (img) drawBillCover(img, x, y, bw, bh, 0.35);
    } else {
      let drawn = false;
      if (img) drawn = drawBillCover(img, x, y, bw, bh, 1);
      if (!drawn) {
        ctx.fillStyle = br.color;
        ctx.fillRect(x, y, bw, bh);
      }
    }
    ctx.fillStyle = 'rgba(255,255,255,.22)';
    ctx.fillRect(x, y, bw, 1.5);
    ctx.fillStyle = 'rgba(0,0,0,.18)';
    ctx.fillRect(x, y + bh - 1.5, bw, 1.5);
    if (br.hp != null && br.hp > 1) {
      const meta = BILL_META[br.bill];
      const maxH = meta && Number.isFinite(meta.hits) ? meta.hits : br.hp;
      const dmg = 1 - (br.hp / maxH);
      if (dmg > 0) {
        ctx.strokeStyle = `rgba(40,20,10,${0.35 + dmg * 0.4})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + bw * 0.15, y + bh * dmg * 0.8);
        ctx.lineTo(x + bw * 0.55, y + bh * 0.25);
        ctx.stroke();
      }
    }
    if (br.type === 8) {
      ctx.fillStyle = '#3a120c';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText('●', x + 3, y + 2);
    }
    drawDenom(br, x, y, bw, bh);
    ctx.restore();
  }

  ctx.fillStyle = 'rgba(0,0,0,.28)';
  ctx.beginPath();
  ctx.ellipse(paddle.x + paddle.w / 2, paddle.y + paddle.h + 3, paddle.w * 0.42, 3.5, 0, 0, Math.PI * 2);
  ctx.fill();
  const pTop = bonusFlags.shooting ? '#ff8fa3' : bonusFlags.magnet ? '#b8ffd0' : '#f4f7ff';
  const pBot = bonusFlags.shooting ? '#9d243c' : bonusFlags.magnet ? '#1f8a4c' : '#6d7c99';
  const pg = ctx.createLinearGradient(paddle.x, paddle.y, paddle.x, paddle.y + paddle.h);
  pg.addColorStop(0, pTop);
  pg.addColorStop(1, pBot);
  ctx.fillStyle = pg;
  roundRect(paddle.x, paddle.y, paddle.w, paddle.h, paddle.h / 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(232,197,71,.9)';
  ctx.fillRect(paddle.x + 8, paddle.y + 2, Math.max(0, paddle.w - 16), 2);

  for (const b of balls) {
    ctx.fillStyle = 'rgba(0,0,0,.30)';
    ctx.beginPath();
    ctx.ellipse(b.x + 2, b.y + b.r + 2, b.r * 0.85, b.r * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();
    const hot = bonusFlags.fireball || b.fire;
    const g = ctx.createRadialGradient(b.x - b.r * 0.35, b.y - b.r * 0.4, b.r * 0.15, b.x, b.y, b.r);
    g.addColorStop(0, hot ? '#ffe1b0' : '#ffffff');
    g.addColorStop(0.55, hot ? '#ff7a2f' : '#d5dbe6');
    g.addColorStop(1, hot ? '#8a2e12' : '#7d8798');
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
  }

  // bullets
  ctx.fillStyle = '#ff5c7a';
  for (const bu of bullets) {
    ctx.fillRect(bu.x - 1, bu.y - 6, 3, 8);
  }

  // powerups
  for (const p of powerups) {
    ctx.fillStyle = '#1a2236';
    ctx.fillRect(p.x - p.w / 2, p.y, p.w, p.h);
    ctx.strokeStyle = '#e8c547';
    ctx.strokeRect(p.x - p.w / 2, p.y, p.w, p.h);
    ctx.fillStyle = '#e8c547';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText((p.meta && p.meta.label) || '?', p.x, p.y + 16);
  }

  // flag strip
  if (state === 'playing') {
    const flags = [];
    if (bonusFlags.magnet) flags.push('MAG');
    if (bonusFlags.shooting) flags.push('GUN');
    if (bonusFlags.fireball) flags.push('FIRE');
    if (bonusFlags.thru) flags.push('THRU');
    if (bonusFlags.fall) flags.push('DROP');
    if (flags.length) {
      ctx.fillStyle = 'rgba(232,197,71,.85)';
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(flags.join(' · '), 8, 16);
    }
  }

  if (state === 'clear') {
    ctx.fillStyle = 'rgba(0,0,0,.45)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#e8c547';
    ctx.font = 'bold 42px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('LEVEL CLEAR', W / 2, H / 2);
  }
  if (state === 'paused') {
    ctx.fillStyle = 'rgba(0,0,0,.5)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#e8eef7';
    ctx.font = 'bold 42px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PAUSED', W / 2, H / 2);
  }

  drawHud();
  drawMenu();
}

function drawHud() {
  if (state === 'menu' || state === 'gameover' || state === 'win' || state === 'name') return;
  ctx.font = '700 18px sans-serif';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.fillStyle = '#e8c547';
  const name = playerName || '';
  ctx.fillText(name, 16, 14);
  const gap = name ? ctx.measureText(name).width + 16 : 0;
  ctx.fillStyle = '#e8eef7';
  ctx.fillText(String(score), 16 + gap, 14);
  ctx.textAlign = 'center';
  ctx.fillText(String(levelIndex + 1), W / 2, 14);
  ctx.textAlign = 'right';
  ctx.fillText(lives === Infinity ? '∞' : String(lives), W - 16, 14);
}

function menuLayout() {
  const btns = [
    { id: 'classic', label: 'JUGAR', primary: true },
    { id: 'immortal', label: 'IMMORTAL', primary: false },
  ];
  if (loadSave('CLASSIC')) btns.push({ id: 'contc', label: 'SEGUIR', primary: false });
  if (loadSave('IMMORTAL')) btns.push({ id: 'conti', label: 'SEGUIR IMMORTAL', primary: false });
  const bw = Math.min(340, W - 64);
  const bh = 48;
  const gap = 10;
  const titleY = portrait ? 86 : 68;
  const subY = titleY + (menuSub ? 42 : 12);
  let y = subY + 22;
  const boxes = btns.map((b) => {
    const box = { ...b, x: (W - bw) / 2, y, w: bw, h: bh };
    y += bh + gap;
    return box;
  });
  const rankTop = y + 8;
  const rowH = 26;
  const rows = loadRank();
  const maxRows = Math.max(0, Math.min(8, rows.length, Math.floor((H - rankTop - 36) / rowH)));
  return { titleY, subY, boxes, rankTop, rowH, rows, maxRows };
}

function drawRanking(layout) {
  const { rankTop, rowH, rows, maxRows } = layout;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#e8c547';
  ctx.font = '700 16px sans-serif';
  ctx.fillText('RANKING', W / 2, rankTop + 8);
  if (!rows.length) {
    ctx.fillStyle = '#9aa6bd';
    ctx.font = '16px sans-serif';
    ctx.fillText('Sin puntajes todavía', W / 2, rankTop + 36);
    return;
  }
  const show = rows.slice(0, Math.max(1, maxRows));
  const colW = Math.min(440, W - 80);
  const left = (W - colW) / 2;
  show.forEach((r, i) => {
    const y = rankTop + 36 + i * rowH;
    const mine = nameKey(r.name) === nameKey(playerName);
    if (mine) {
      ctx.fillStyle = 'rgba(232,197,71,.16)';
      ctx.fillRect(left - 10, y - rowH / 2 + 1, colW + 20, rowH - 2);
    }
    ctx.textAlign = 'left';
    ctx.font = '700 16px sans-serif';
    ctx.fillStyle = mine ? '#e8c547' : '#e8eef7';
    const tag = r.mode === 'IMMORTAL' ? ' ∞' : '';
    ctx.fillText((i + 1) + '.  ' + r.name + tag, left, y);
    ctx.textAlign = 'right';
    ctx.fillText(r.score.toLocaleString('es-AR'), left + colW, y);
  });
}

function drawMenu() {
  if (state !== 'menu' && state !== 'gameover' && state !== 'win') return;
  const layout = menuLayout();
  ctx.fillStyle = 'rgba(5, 8, 16, 0.62)';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#e8c547';
  ctx.font = '700 52px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(menuTitle, W / 2, layout.titleY);
  if (menuSub) {
    ctx.fillStyle = '#e8eef7';
    ctx.font = '20px sans-serif';
    ctx.fillText(menuSub, W / 2, layout.subY);
  }
  for (const b of layout.boxes) {
    roundRect(b.x, b.y, b.w, b.h, b.h / 2);
    ctx.fillStyle = b.primary ? '#e8c547' : 'rgba(5, 8, 16, 0.35)';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#e8c547';
    ctx.stroke();
    ctx.fillStyle = b.primary ? '#141000' : '#f4f7fb';
    ctx.font = '700 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(b.label, b.x + b.w / 2, b.y + b.h / 2 + 1);
  }
  drawRanking(layout);
}

function loop(ts) {
  if (!lastTs) lastTs = ts;
  let dt = (ts - lastTs) / (1000 / 60); // 1.0 at 60fps
  lastTs = ts;
  if (dt > 3) dt = 3; // spiral-of-death guard
  if (state === 'playing' || state === 'clear') update(dt);
  flushSfx();
  draw();
  window.__dxballRaf = requestAnimationFrame(loop);
}

function showMenu(title, sub) {
  menuTitle = title || 'LHDA-BALL';
  menuSub = sub || '';
  if (title !== 'GAME OVER' && title !== 'YOU WIN') state = 'menu';
}

function canvasPoint(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (clientX - rect.left) * (W / Math.max(1, rect.width)),
    y: (clientY - rect.top) * (H / Math.max(1, rect.height)),
  };
}
function pressAt(clientX, clientY) {
  if (state === 'name') return;
  const p = canvasPoint(clientX, clientY);
  mouseX = p.x;
  unlockAudio();
  if (state === 'menu' || state === 'gameover' || state === 'win') {
    for (const b of menuLayout().boxes) {
      if (p.x >= b.x && p.x <= b.x + b.w && p.y >= b.y && p.y <= b.y + b.h) {
        if (b.id === 'classic') startNew('CLASSIC');
        else if (b.id === 'immortal') startNew('IMMORTAL');
        else if (b.id === 'contc') continueMode('CLASSIC');
        else if (b.id === 'conti') continueMode('IMMORTAL');
        return;
      }
    }
    return;
  }
  releaseOrShoot();
}
function takeControl(clientX) {
  if (state === 'name') return;
  autoPlay = false;
  mouseX = canvasPoint(clientX, 0).x;
  unlockAudio();
}
function onPointerMove(e) {
  if (state === 'name' || autoPlay) return;
  mouseX = canvasPoint(e.clientX, 0).x;
}
function onPointerDown(e) {
  if (e.target && e.target.closest && e.target.closest('#name-gate')) return;
  takeControl(e.clientX);
  pressAt(e.clientX, e.clientY);
}
if (window.__dxPtr) {
  window.removeEventListener('pointermove', window.__dxPtr.move);
  window.removeEventListener('pointerdown', window.__dxPtr.down);
}
window.__dxPtr = { move: onPointerMove, down: onPointerDown };
window.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerdown', onPointerDown);
function releaseOrShoot() {
  unlockAudio();
  if (state === 'playing') {
    if (balls.some(b => b.sticky)) launchBalls();
    else if (bonusFlags.shooting) fireLasers();
  }
}

function onKeyDown(e) {
  const tag = document.activeElement && document.activeElement.tagName;
  if (state === 'name' || tag === 'INPUT' || tag === 'TEXTAREA') return;
  keys[e.key] = true;
  if (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault();
    if (e.key === ' ' || e.code === 'Space') {
      unlockAudio();
      if (state === 'playing') {
        if (balls.some(b => b.sticky)) launchBalls();
        else if (bonusFlags.shooting) fireLasers();
      }
    }
  }
  if (e.key === 'p' || e.key === 'P') {
    if (state === 'playing') state = 'paused';
    else if (state === 'paused') state = 'playing';
  }
  if (e.key === 'Escape') {
    if (state === 'playing' || state === 'paused') {
      saveGame();
      commitRank();
      state = 'menu';
      showMenu('LHDA-BALL', playerName);
    }
  }
}
function onKeyUp(e) { keys[e.key] = false; }
if (window.__dxballKeys) {
  window.removeEventListener('keydown', window.__dxballKeys.down);
  window.removeEventListener('keyup', window.__dxballKeys.up);
}
window.__dxballKeys = { down: onKeyDown, up: onKeyUp };
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

paddle = makePaddle();
balls = [];
bricks = [];
powerups = [];
bullets = [];
openNameGate();
window.__dxballRaf = requestAnimationFrame(loop);
loadBills();
};
