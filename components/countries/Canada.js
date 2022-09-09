import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Canada = () => {

  const { canadaColor } = useContext(ColorContext)

return (
<g className={'canada'}>
    <style jsx>{`
    .canada {
    fill: ${canadaColor};
    stroke-width: 1;
    }
    `}</style>
      <path d="M 665.9 203.6 669.3 204.5 674 204.3 670.7 206.9 668.7 207.3 663.2 204.6 662.6 202.5 665.1 200.6 665.9 203.6 Z" stroke="black"/>
      <path d="M 680.3 187.6 677.9 187.7 672.1 185.8 668.6 182.8 670.5 182.3 676.4 183.9 680.6 186.5 680.3 187.6 Z" stroke="black"/>
      <path d="M 372.4 191.3 369.3 192.2 363 189.4 363 187.2 360.1 185 360.4 183.2 356.1 182.1 356.7 178.7 358.2 177.3 362.3 178.6 364.7 179.6 368.8 180.2 369 182.4 369.4 185.3 372.6 187.9 372.4 191.3 Z" stroke="black"/>
      <path d="M 711.5 177.8 706.5 183.2 710.4 181.1 713.3 182.5 710.9 184.6 714.7 186.3 717.5 184.8 721.8 186.7 719 191.3 722.8 190.2 722.5 193.5 723 197.4 719.4 203 717 203.2 714.1 202 716.6 196.9 715.4 196.1 708.1 201.5 705.1 201.3 709.5 198.3 705.1 196.8 699.6 197.2 690 197 689.8 195.2 693.6 192.9 691.9 191.3 697.3 187.5 705.5 177.6 709.7 174.1 714.7 172 716.8 172.2 715.3 173.9 711.5 177.8 Z" stroke="black"/>
      <path d="M 351.5 156.4 353 157.2 358 156.7 350.8 163.6 351.1 168.6 349.2 168.6 348.5 165.8 349 162.9 348.2 161 349.5 158.3 351.5 156.4 Z" stroke="black"/>
      <path d="M 634.9 108.9 631.3 111.9 629.6 111.4 629.5 109.7 629.9 109.3 632.7 107.6 634.4 107.7 634.9 108.9 Z" stroke="black"/> 
      <path d="M 625.2 105.7 618 108.9 615 108.7 615 107.2 620 104.5 626 104.6 625.2 105.7 Z" stroke="black"/>
      <path d="M 622.1 88.9 621.2 91.4 623.9 90.5 625.4 92 628.9 94 632.7 95.7 631.3 98.4 634.8 98 636.7 99.9 631.7 101.7 625.8 100.3 625 97.7 618.7 100.8 610.5 103.7 611.2 100.4 604.9 100.9 610.6 98.1 614.2 93.6 619.3 88.5 622.1 88.9 Z" stroke="black"/>
      <path d="M 667 80.6 662.1 80.9 662.8 78.2 666.6 75.1 670.9 74.4 673.2 75.9 671.7 78.2 670.8 79 667 80.6 Z" stroke="black"/>
      <path d="M 592.5 69.9 588.4 71.8 584.2 70.2 580.3 70.7 576.9 68.3 581.9 66.6 586.8 64.3 589.8 65.8 591.4 66.8 591.8 67.8 592.5 69.9 Z" stroke="black"/>
      <path d="M 645.5 212.5 643.3 208.9 646.2 200.4 644.6 198.6 640.9 199.6 639.8 198 634.3 202.7 631.1 207.6 628.3 210.5 625.8 211.5 624.1 211.8 623 213.3 613.7 213.3 605.9 213.4 603.2 214.5 596.4 218.9 596.4 218.8 595.5 218.4 593.5 219.3 591.6 220.6 589.8 219.5 585.1 220.3 581.2 221.2 579.3 222 577 224.1 578.8 224.8 580.5 224.4 580.8 224.4 580.5 226.3 575.7 227 572.9 227.8 571.2 228.8 568.6 228.2 567 228.5 564.1 230.3 559.5 232.3 556.8 231.9 558.8 229.7 562.5 226.2 566.6 224.1 567.7 222.3 568.6 219.3 572.4 215.8 573.3 211.8 574.4 215.7 578.2 216.6 580.6 214.5 579.2 209.7 578.3 207.7 574.3 206.5 570.5 205.8 566.6 205.8 563.2 205 562.8 203.6 561.4 204.5 560.2 204.3 562.1 202.2 560.3 201.4 562.2 199 561 197.2 562.7 195.4 557.5 194.5 557.4 190.9 556.6 190.1 553.3 189.9 549.2 188.7 547.7 189.5 545.9 191 542.6 192 539.5 194.5 534.1 192.8 529.7 193.6 525.8 191.7 521.2 190.7 517.9 190.3 516.9 189.3 517.8 185.9 516.1 185.9 514.8 188.3 504.6 188.3 487.6 188.3 470.8 188.3 455.9 188.3 441.1 188.3 426.4 188.3 411.3 188.3 406.5 188.3 391.8 188.3 377.7 188.3 377 188.3 371.6 182.2 370 179.5 363 176.9 364.3 171.4 367.9 167.7 363.8 165 366.9 160.1 364.8 155.7 367.3 152.5 372.4 149.6 375.6 145.8 371 142 372.4 135.1 373.5 130.9 371.9 128.2 371.1 125.8 371.7 122.7 365.2 124.6 357.6 127.9 357.3 124.1 356.8 121.5 354 119.9 349.8 119.7 385.4 87 410 66.6 416 67.9 419.3 70.5 423 71 429.3 68.8 436.3 67.1 441.6 67.7 450.5 65.4 458.7 64.1 458.9 66.3 463.4 65 467.3 62.5 469.4 63.1 470.8 67.9 480.3 64.2 476.4 68.3 482.4 67.4 485.6 65.9 490.2 66.2 494.1 68.4 501.6 70.4 506.3 71.3 510.7 71 513.6 73.8 505.1 76.5 511.5 77.6 523.4 77 527.8 76 529.2 79.3 536.3 76.6 534.2 74.2 538.7 72.4 543.9 72.1 547.8 71.6 549.9 72.9 551.4 75.8 556.4 75.4 561.7 77.9 568.9 77 574.9 77.1 577.3 73.7 581.8 72.8 586.7 74.6 582.4 79.8 588.6 75.4 591.8 75.6 598.2 70.1 596.6 66.8 593.7 64.6 599.2 58.7 607.4 54.9 611.9 55.8 613.9 58.1 614.3 64.1 608.5 66.7 615.2 67.8 610.8 73.3 619.7 69.1 621.9 72.6 617.6 76.6 618.9 80.3 626.2 76.4 632.7 71.6 637.4 65.7 642.9 66.1 648.3 66.9 651.9 69.6 650.2 72.3 645.1 75.2 646 78.1 643.6 80.8 632.7 84.7 626.2 85.6 623 83.9 619.7 86.7 612.3 91.4 609.3 93.9 601.6 97.7 595.1 98.1 590 100.5 587.1 104.3 581.4 105 572.7 109.7 563.3 116.2 558.3 120.8 553.4 127.7 559.4 128.7 557.9 134.2 557.1 138.8 564.4 137.6 571.4 140.2 574.7 142.5 576.4 145.3 581.3 147 584.9 149.5 592.5 149.9 597.3 150.5 593.7 155.7 592 161.8 592.1 168.7 596.5 174.6 601.2 172.6 606.8 166.2 609.1 156.6 607.4 153.4 616.4 150.5 623.9 146.3 628.7 142.1 630.4 138.1 630 133 626.8 128.5 635.7 122.3 636.7 117 640.6 108 644.4 106.6 651.1 108.2 655.3 108.8 659.8 107.2 662.9 109.2 666.5 112.6 666.7 114.8 674.4 115.3 671.8 120.2 669.5 127.6 673.3 128.6 674.9 132.1 683.1 128.8 690.6 122.2 694.8 119.5 695.9 124.8 698.5 132.3 700.5 139.5 697.1 143.3 701.9 146.7 704.8 150.1 711.7 151.7 714.1 153.6 714.1 158.8 717.5 159.6 718.6 161.9 716.6 168.8 712.3 171.1 708.1 173.3 699.3 175.5 691.4 180.5 682.8 181.6 672.7 180.2 665.4 180.2 660.1 180.6 654.4 185.1 647 187.9 636.9 196.1 629 201.9 633.7 200.9 644.6 192.6 656.9 187.4 664.5 186.8 667.8 189.9 661.7 194.1 661.1 200.8 661.2 205.6 666.8 208.7 675.4 207.8 682.6 200.7 681.6 205.3 684.1 207.6 676.7 211.7 664.3 215.5 658.5 218 651.3 222.6 647.6 222.1 649.1 216.8 659.5 211.5 651.4 211.7 645.5 212.5 Z" stroke="black"/>
      <path d="M 539 48.7 534.3 51.1 544.8 49.6 547.4 52.2 554.7 49.5 556.5 51.2 554.3 56.3 558.6 54.2 561.4 48.9 565.7 48.1 568.7 48.9 570.9 51 568.2 56.1 565.8 59.8 570 62.4 575 65 572.4 67.3 565.3 67.8 566.1 69.8 562.9 71.8 556.2 71 550.5 69.5 545.4 69.8 535.9 71.7 524.6 72.5 516.7 73 517 70.4 512.9 69 508.6 69.6 508 65.3 511.3 64.7 518.6 63.8 524.1 64.1 530.3 63.1 523.8 61.9 514.7 62.3 509 62.2 509 60.3 520.7 58.1 514.4 58.2 509 56.8 516.8 52.9 522 50.8 536.2 47.7 539 48.7 Z" stroke="black"/>
      <path d="M 578.5 47.2 571.5 50.6 569.2 47 571.3 46.2 576.8 46 578.5 47.2 Z" stroke="black"/>
      <path d="M 687.1 48.8 686.4 50.2 682.3 50.1 678.2 50 673.3 50.7 672.4 50.3 670.3 47.6 672 45.8 674.2 45.4 682.6 46 687.1 48.8 Z" stroke="black"/>
      <path d="M 647.3 48.5 647.6 51.7 654.8 47.6 666.5 45.5 668.8 50.8 665.6 54.2 674.6 52.7 679.9 50.6 686.7 53.2 690.4 55.7 689.3 58 697.5 56.8 699.4 60.2 707.8 62.3 710 64.4 710.9 69.5 701.8 72 709.5 75.6 715.4 76.8 718.7 81.8 725.2 82.2 721.9 86.1 711 92.6 707 90.2 703.2 84.8 697.3 85.5 695 88.8 697.7 92 702.2 94.6 703.2 96.1 703.1 101.8 699.5 105.9 694.8 104.3 686.2 99.8 689.8 104.7 692.6 108.2 692.3 110.2 681.4 107.9 673.8 104.5 670 101.8 672.4 100.1 667.6 97.2 662.9 94.5 662 96.1 648.9 97 646.5 95.1 651.9 90.9 660 90.8 669.3 90.1 669.1 88.1 672.2 85.3 681 79.9 681.4 77.4 680.9 75.6 676.2 72.9 669.1 71.1 672.6 69.7 670.6 66.3 667.2 66 665.3 64.2 662 65.8 654.1 66.5 640.1 65.3 632.7 63.7 626.8 62.9 624.9 61 631.2 58.6 625.5 58.6 628.8 53.3 635.9 48.7 641.9 46.6 653.1 45.2 647.3 48.5 Z" stroke="black"/>
      <path d="M 596.9 45 600.5 46.1 608.1 45.4 607.6 46.9 601.5 49.4 605.3 51.6 600.1 56.3 591.7 58.3 588.3 57.9 587.4 55.9 581.5 51.9 583.2 50.2 590.6 50.8 589.7 47.5 596.9 45 Z" stroke="black"/>
      <path d="M 619.5 50.5 611.7 54.4 607.3 54.2 609.1 49.6 611.7 47.1 615.9 44.9 621.1 43.5 629 43.7 635.2 44.9 625.1 49.5 619.5 50.5 Z" stroke="black"/>
      <path d="M 503.7 57.7 490.2 60.3 490.8 58 484.8 55.2 489.2 53 496.7 49.2 504.3 45.8 504.7 42.7 518.7 41.9 522.9 43 532.4 43.3 534.3 44.7 535.9 46.9 529.4 48.2 515.5 51.8 506.3 55.5 503.7 57.7 Z" stroke="black"/>
      <path d="M 628.9 39.3 624.8 41.2 619.6 40.8 616.4 39.5 620.9 37.3 627.8 35.9 629.2 37.7 628.9 39.3 Z" stroke="black"/>
      <path d="M 620.1 30.6 620.3 32.9 617.5 35.4 611.7 39.2 604.8 39.7 601.6 38.9 605 36 598.4 36.3 602.7 32.5 606.5 32.7 614.2 31 619.1 31.3 620.1 30.6 Z" stroke="black"/>
      <path d="M 580.7 33.2 580 34.9 584.4 34.1 588 34.3 585.7 36.8 580.6 39.1 566.7 39.9 554.4 42.1 548.4 42.2 549.9 40.6 560.6 38.3 542.7 38.9 538.5 38 550.2 33.2 555.6 31.8 563.9 33.5 566.8 36.4 572.9 36.8 573.6 32.1 579.4 30.3 582.5 30.8 580.7 33.2 Z" stroke="black"/>
      <path d="M 636.4 28.8 638.7 30.4 646.1 30.4 647.5 32 644.7 33.8 647.8 34.9 649 36.1 653.9 36.3 659 36.7 666.1 35.7 674.2 35.2 680 35.6 682.3 37.5 681.3 39.5 677.7 40.9 671 42 666.7 41.3 654.9 42.1 646.9 42.2 641.3 41.6 632.7 40 634.3 37.2 636.4 34.8 635 32.6 628 32 625.4 30.5 629.2 28.5 636.4 28.8 Z" stroke="black"/>
      <path d="M 560.7 26.2 554.9 29.9 549.6 31.6 545.8 31.8 535.9 33.9 528.8 34.7 525.2 33.6 536.9 29.9 549.1 26.8 554.6 26.9 560.7 26.2 Z" stroke="black"/>
      <path d="M 641.9 26.8 640.1 26.9 633.5 26.6 634.2 25.3 641.4 25.4 643 26.2 641.9 26.8 Z" stroke="black"/>
      <path d="M 583.1 25.9 574.3 27.3 571 25.8 576.1 24.3 582.1 23.8 586.2 24.5 583.1 25.9 Z" stroke="black"/>
      <path d="M 590.9 21.7 585.2 22.6 579.2 22.6 580.2 21.9 585.9 20.6 587.6 20.8 590.9 21.7 Z" stroke="black"/>
      <path d="M 637.7 24.2 631.1 25.2 629.5 24.1 630.1 22.4 632.3 20.5 636.7 20.7 638.4 21 640.7 22.6 637.7 24.2 Z" stroke="black"/>
      <path d="M 623.9 23 622.8 24.9 617.5 24.4 613.5 22.9 605.7 22.7 611 21.4 608.2 20.3 610.4 18.5 616.5 19.1 624 20.8 623.9 23 Z" stroke="black"/>
      <path d="M 678 16.9 680.7 18.4 674.2 19.7 663.6 23.2 656.8 23.5 650 22.9 648.4 21 650.5 19.4 654.8 18.2 648.2 18.2 646.2 16.7 646.6 14.8 651.5 12.9 655.6 11.6 659.6 11.3 659.3 10.3 667.6 10.1 669.2 12.3 673.9 13.2 678.7 14.1 678 16.9 Z" stroke="black"/>
      <path d="M 757.2 2.9 765.9 3.2 772.6 3.7 777.8 4.7 776.7 5.7 766.9 7.4 757.9 8.2 753.9 9.1 761.4 9.1 750.9 11.6 744.1 12.8 734.8 16.3 726.7 17 723.6 18 712.3 18.4 716.7 19 713.4 19.8 714.1 22.1 709.1 23.7 702.2 25 698.7 26.8 692.1 28.3 691.6 29.4 698.1 29.2 697 30.4 684.3 33.3 675.8 31.9 664.1 32.7 659.1 32.1 652.3 31.8 654.4 29.5 662.4 28.4 664.4 25 667 24.7 674.5 26.7 672.8 23.7 667.9 22.8 672.9 21 680.5 19.9 683.3 18.3 680.3 16.6 681.4 14.4 690.8 14.5 693 15 700.3 13.4 693 12.9 680.4 13.2 676 11.8 675.2 10.1 672.7 8.9 673.8 7.6 679.8 6.8 684 6.7 691.4 6.1 698.2 4.6 702.1 4.8 704.5 5.9 709.5 3.9 714.7 3.3 721.2 2.9 731.6 2.7 732.9 3.1 743.2 2.5 750.2 2.7 757.2 2.9 Z" stroke="black"/>
</g>
)
}

export default Canada