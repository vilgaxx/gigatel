import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <>
      <section className="py-32 text-center ">
        <h1 className="text-4xl font-bold uppercase z-50 text-slate-900">
          About GigaZone Communication
        </h1>
        <p className="py-10 text-lg w-4/5 mx-auto text-justify">
          Started in 2012, GigaZone Communication is one of the fastest-growing
          Wired & Wireless Broadband Service Providers in Delhi. We focus solely
          on delivering high-speed internet and internet connections to
          individuals and enterprises. Our current network footprint covers
          Delhi and NCR, targeting the addressable market in these areas as well
          as small to mid-size businesses. At GigaZone Communication, we are
          driven to make internet surfing a superior experience for our
          customers.
        </p>
        <h4 className="text-2xl font-bold uppercase">Our Services</h4>
        <p className="py-10 text-lg w-4/5 mx-auto text-justify">
          GigaZone Communication operates as an authorized distributor of 'B
          class' ISP services in Delhi & NCR, providing broadband and other
          services. 100% owned and operated in Delhi, we bring extensive
          business experience from the Satellite & Telecom industry since 2008.
          This background ensures sound governance and a wealth of experience
          from both the public and private sectors.
        </p>
        <h4 className="text-2xl font-bold uppercase">Our Commitment</h4>
        <p className="py-10 text-lg w-4/5 mx-auto text-justify">
          GigaZone Communication is committed to delivering fast, secure, and
          reliable internet to your home and business. With our services, you
          can surf websites, shop online, play games, download music and
          podcasts, exchange large files, watch movies, and much more at true
          broadband speeds.
          <br /> GigaZone Communication - Connecting You to the Future.
        </p>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      </section>
    </>
  );
};

export default About;
