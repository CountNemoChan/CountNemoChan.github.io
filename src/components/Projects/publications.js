import fpdDrive from "../../Assets/Projects/thumbnails/fpd_drive_teaser.webp";
import usrDrive from "../../Assets/Projects/thumbnails/usr_drive_teaser.webp";
import vistagen from "../../Assets/Projects/thumbnails/vistagen_teaser.webp";
import gcraydiffusion from "../../Assets/Projects/thumbnails/gcraydiffusion_teaser.webp";
import mcm from "../../Assets/Projects/thumbnails/mcm2024_2.webp";
import neuralIndicator from "../../Assets/Projects/thumbnails/icml2024.webp";
import paddyField from "../../Assets/Projects/thumbnails/paddy_field.webp";
import mcmPaper from "../../Assets/Publications/mcm2024.pdf";
import mcmCertificate from "../../Assets/Publications/mcm-certificate.pdf";
import neuralIndicatorPaper from "../../Assets/Publications/huang24b.pdf";
import paddyFieldPaper from "../../Assets/Publications/paddy-field.pdf";

export const publications = [
  {
    title: "FPD-Drive",
    featured: true,
    description: "Future policy distillation for end-to-end autonomous driving.",
    authors: "Li-Heng Chen*, Qifeng Chen*, Chengwei Wu, Yingjie Zhang, Sheng Yang, Hongbo Fu, Shaoqing Ren",
    venue: "arXiv · 2026",
    image: fpdDrive,
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2610.13232" },
      { label: "Project", url: "https://countnemochan.github.io/FPD-Drive/" },
    ],
  },
  {
    title: "USR-Drive",
    featured: true,
    description: "Unified driving scene representation via joint denoising of 3D Gaussians and boxes.",
    authors: "Li-Heng Chen, Haokai Pang, Chengye Su, Jiarun Liu, Qifeng Chen, Ziqian Ni, Jianxin Huang, Shi-Sheng Huang, Hongbo Fu, Sheng Yang",
    venue: "arXiv · 2026",
    image: usrDrive,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2608.19036" }],
  },
  {
    title: "VistaGEN",
    featured: true,
    description: "Consistent driving video generation with fine-grained control using multiview visual-language reasoning.",
    authors: "Li-Heng Chen*, Ke Cheng*, Yahui Liu, Lei Shi, Shi-Sheng Huang, Hongbo Fu",
    venue: "TVCG (Major Revision)",
    image: vistagen,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2603.28353" }],
  },
  {
    title: "GCRayDiffusion",
    featured: true,
    description: "Pose-free surface reconstruction via geometric consistent ray diffusion.",
    authors: "Li-Heng Chen, Zi-Xin Zou, Chang Liu, Tianjiao Jing, Yan-Pei Cao, Shi-Sheng Huang, Hongbo Fu, Hua Huang",
    venue: "ICCV · 2025",
    image: gcraydiffusion,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2503.22349" }],
  },
  {
    title: "The Power of Momentum",
    description: "How to win the match with data.",
    authors: "Li-Heng Chen, Rui Chen, Yujia Liu",
    venue: "Mathematical Contest in Modeling · 2024 · F Prize",
    image: mcm,
    links: [{ label: "Paper", url: mcmPaper }, { label: "Certificate", url: mcmCertificate }],
  },
  {
    title: "NeuralIndicator",
    description: "Implicit surface reconstruction from neural indicator priors.",
    authors: "Shi-Sheng Huang, Guo Chen, Li-Heng Chen, Hua Huang",
    venue: "ICML · 2024",
    image: neuralIndicator,
    links: [{ label: "Paper", url: neuralIndicatorPaper }],
  },
  {
    title: "Paddy Field Speckle Model",
    description: "Construction of a speckle pattern model with paddy field characteristics.",
    authors: "Rui Chen, Li-Heng Chen, Wentao Qing",
    venue: "Beijing Undergraduate Research and Innovation Project",
    image: paddyField,
    links: [{ label: "Paper", url: paddyFieldPaper }],
  },
];
