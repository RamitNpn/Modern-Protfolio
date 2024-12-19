import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  .footerTop {
    display: flex;
    gap: 3rem;
    padding: 2rem 0;
    .leftFooter {
      flex: 4;

      .logo_text {
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 1.5rem;
        letter-spacing: 1px;
      }

      .left_footer_desc {
        font-size: 14px;
        color: var(--gray);
      }

      .contactButton {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 2rem;
        cursor: pointer;

        font-size: 15px;
        .contactButtonText {
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 1px;
        }
      }

        .exploreButton {
      display: inline-block;
      margin-top: 1rem;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 600;
      color: white;
      background: linear-gradient(
        to right,
        #7d19ff,
        #7518ff,
        #5200e5d1,
        #6114e99c,
        #521eb2a8,
        #4e279773
      );
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
    }
  }
    }
    .rightFooter {
      flex: 8;
      display: flex;
      gap: 2rem;
      ul {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.71rem;
      }
      ul li {
        letter-spacing: 1px;
        list-style: none;
        color: var(--gray);
        font-size: 14px;
      }
    }
  }
  .footerBottom {
    height: 60px;
    background: var(--light_black);
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;
    .bottom_footer_left {
      li {
        font-size: 12px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      gap: 1rem;

      li {
        list-style: none;
        color: var(--gray);
        // font-size:13px;
        letter-spacing: 1px;
        cursor: pointer;
        svg {
          fill: var(--gray);
          color: var(--gray);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .footerTop {
      flex-direction: column;
      align-items: center;
      text-align: center;

      .leftFooter {
        .logo_text {
          font-size: 1.2rem;
        }

        .left_footer_desc {
          font-size: 12px;
        }

        .contactButton {
          font-size: 13px;

          .contactButtonText {
            font-size: 12px;
          }
        }
      }

      .rightFooter {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;

        ul {
          align-items: center;
        }
      }
    }

    .footerBottom {
      flex-direction: column;
      height: auto;
      padding: 1rem 0;

      .bottom_footer_left {
        margin-bottom: 1rem;
      }

      ul {
        justify-content: center;
      }
    }
  }

  @media (max-width: 480px) {
    .footerTop {
      gap: 1rem;
      padding: 1rem 0;

      .leftFooter {
        .logo_text {
          font-size: 1rem;
        }

        .left_footer_desc {
          font-size: 10px;
        }

        .contactButton {
          font-size: 11px;

          .contactButtonText {
            font-size: 10px;
          }
        }
      }

      .rightFooter {
        grid-template-columns: 1fr;
        gap: 0.5rem;

        ul li {
          font-size: 12px;
        }
      }
    }

    .footerBottom {
      padding: 0.5rem 1rem;

      ul li {
        font-size: 10px;
      }
    }
  }
`;
