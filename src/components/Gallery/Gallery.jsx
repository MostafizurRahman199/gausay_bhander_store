export function DefaultGallery() {
    const data = [
      {
        imageLink:
          "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/480445947_929110846005663_5859274559484481086_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF6EbpEHiOMVVwP4L6l8u8k1pP1x5W6x3nWk_XHlbrHeRktuln4pqajZgg8bnHfKC_KUbja5Ftz3r6G5O2pK9wo&_nc_ohc=3aFKxTtRn3AQ7kNvgEcBV8y&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=VMVAsM48nPg2E9TNADwDOQ&oh=00_AYEA2Ca3EEZpperygoEWMSJMVR8ZHgyWtzwyCBzGc0TZ4w&oe=67DF5E3C",
      },
      {
        imageLink:
          "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/480236551_929110872672327_4728540977147658860_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH7QjXeDs2uuJNolp13l9drZoblbKfF5bFmhuVsp8XlsU7TK4tvCtu1EBU0rPPbXUlui1vq44N-8MpCovixDTGL&_nc_ohc=9fiFIr6vwfUQ7kNvgF03DaE&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=VMVAsM48nPg2E9TNADwDOQ&oh=00_AYE4ptWrU_9orlL2SsS6t7nGrmyhKM6XUhbCZaDwYNZvsg&oe=67DF8467",
      },
      {
        imageLink:
          "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/480431228_929110822672332_8730382749611115778_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGWmbU8b2iuF514r2vbEBEF91Z2fgx07PH3VnZ-DHTs8XA-PB9_kEOgemntAAAJj5GEEA-6tF4u6yy7rZV1R7Ei&_nc_ohc=JYMCzMDsYUkQ7kNvgHYP-3z&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=dk3TFicEmUT_xOk6R2m_ww&oh=00_AYEVHZSpfvVEDLmqeihJxnr0Ygo20UnDYWPU_FJN1o2DMQ&oe=67DF8655",
      },
      {
        imageLink:
          "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/473312097_3851217188466138_148341624590257140_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmRBfsctsNXE2JUQV2Bksuxa3rAgS8GQTFresCBLwZBLESDqGxvTG7s3ORnoW6C1Xjatymyg65L86JYJ0QKT9h&_nc_ohc=ls23zrtLHK4Q7kNvgGQJlVf&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=hH2b1gkgrZPWHd6tf_2XFw&oh=00_AYEiEE2z0kBERXeYADzdU_ps4KmxLKUv3eo8sWveeA6kGw&oe=67DFA6B3",
      },
      {
        imageLink:
          "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/240242302_2952436521677547_6781700932814604610_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFSMsbVxqr5weBbXgmqsi1BDkCZp6Bxc-QOQJmnoHFz5CC-6HtWL5n7tY0O1GUJFbyJ4PqOC0xLlkjfsYRVBBAI&_nc_ohc=SSN-1Nu7yikQ7kNvgF8wo6w&_nc_oc=AdirYN_6DSk-QVjFuZgzdkkmDFduPZvtM2H4bZUaxdUMazIZnivo9r9p3RRTnq__-PQ&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=A1C29yN1HK4X6L0p5UCJDw&oh=00_AYFp95CpvXkHHsA6cHfMCAZEh2vn0vlUfIv9xqpVtyUU3A&oe=67DF6B3A",
      },
      {
        imageLink:
          "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/195194122_2901745326746667_7758253789285174217_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyvU7qa0CncsLotaBtEh-wQqLJwG9uuB5CosnAb264HuthIioY_Nq7t2EBK4Xjzky9cTGHp93Pqh7OsNxzQbEx&_nc_ohc=HezUSWBCiFcQ7kNvgHcXeJa&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=UJVCkGU2fovfcxv0PcHd3w&oh=00_AYHmCaee3BQFB6NUQEA0fiMd9U6cI9VF3fa78l4RlJS8Cg&oe=68012B09",
      },
      {
        imageLink:
          "https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/186558384_2894635054124361_35615767846717355_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGLhWeYQWPifOg4ALChCrGDHciSQQE20G8dyJJBATbQbyPLZZITcI5UuFToxIAE_mrh8p_nhm_ouQpQ9r-oCtfe&_nc_ohc=E1FrmOgD96IQ7kNvgEBNnxx&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=FWRFK57_G790Tq_fK0IVpg&oh=00_AYE9GR8OVJ4jr6eIBzMIM2pEbHKpY3fAqn5uRHHScw0jcA&oe=680113EB",
      },
      {
        imageLink:
          "https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/188400450_2889812107939989_6984614842173764799_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE23rGpVYexHhzJic_IchbHaUQfBs9kWMJpRB8Gz2RYwrqpFix4FHMVXHkx9Nf0pYVG7wBO05SzfZHhpMUg_9pJ&_nc_ohc=2Q38fP5tuMIQ7kNvgE-R5Gc&_nc_oc=AdjcO_4Lrp8e7F_wUoAc1Zu5uer8ggmH5TAnP6pyCb1c9lburW6SmGHXuIiVgMMT8I0&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=edbqRiYOmYwbU6TaYMD4tw&oh=00_AYHf9QpsAh9OMpc4ZxU6PBq_nXzHVBqKcjAq5OSt_m5xTQ&oe=680116AC",
      },
      {
        imageLink:
          "https://scontent.fdac24-5.fna.fbcdn.net/v/t1.6435-9/188985626_2889812191273314_1864967160243191250_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGE4BSd5BtFITPWiufcqb7giABgg_DH69CIAGCD8Mfr0BC4eMcTU99FkE2dLH9USgk_-rDvhk73jDMXdy_2FtSG&_nc_ohc=V_Fyz8uE7SEQ7kNvgHpduMB&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=4LKa3aaENOCnXbe2RdJGKw&oh=00_AYEyN3V9nByh4t6nzidRdFZAHmROi-rRqcDBh5l0Tyr7OA&oe=680138EC",
      },
    ];
  
    return (
      <div className="w-10/12 mx-auto my-12">
        {/* Gallery Title */}
        <h2 className="text-center text-4xl font-semibold my-12">Our Gallery</h2>
  
        {/* Gallery Images */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {data.map(({ imageLink }, index) => (
            <div key={index} className="group relative">
              <img
                className="h-40 w-full max-w-full rounded-lg object-cover object-center transition-transform duration-300 group-hover:scale-110"
                src={imageLink}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  