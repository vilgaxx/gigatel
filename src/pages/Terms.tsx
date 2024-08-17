import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
const Terms = () => {
  return (
    <>
      <section className="py-32 text-center ">
        <h1 className="text-4xl font-bold uppercase z-50 text-slate-900">
          INTRODUCTION
        </h1>
        <p className="py-10 text-lg w-4/5 mx-auto text-justify">
          By being allowed access to this Site (as defined below), you enter
          into the Site user agreement on the terms and conditions ("Terms") set
          out below. The Company (as defined herein) reserves the right to add
          to or change/modify the Terms. The Company reserves the right, at its
          sole discretion, to make changes to any section of the Site. Due to
          its policy of updating and improving the Site, the Company may wish to
          change these Terms including those relating to the use of the
          Information (as defined herein). You should read these Terms from time
          to time because such revised Terms shall be binding on you. Certain
          provisions of these Terms may be superseded by expressly designated
          legal notices or terms located on particular pages on this Site. If
          you access or register with the Site after the Company has published
          or notified you of those changes, you agree to be bound by those
          changes.
          <br />
          Set out below are the Terms governing the access, use of, and
          downloads from this website, www.GigaZonecommunication.in ("Site"),
          and includes any file or groups of files hosted on a computer and
          accessible by third parties through the internet by the use of any
          protocol used to transmit files through the internet and any
          collection of one or more inter-related web pages or documents which
          can be viewed in its entirety without leaving the applicable distinct
          URL when viewed by a browser program through a common URL. It is
          expressly understood that the term "URL" means the electronic address
          of any document located on the web comprising a code or series of
          letters, numbers, and/or symbols, which corresponds to a specific
          location on the web.
          <br />
          You are advised to read the Terms carefully before accessing or
          registering on the Site. By accessing the Site, you are agreeing to
          the Terms, whether or not you are a registered user. Please contact
          [support@GigaZonecommunication.in] if you require any clarifications.
          <br />
          The materials on the Site are provided by GigaZone COMMUNICATION PVT.
          LTD., an Indian company, having its registered office at [Company's
          Address] ("the Company") as a service to its users and subscribers,
          and may be used for informational purposes only. If you do not agree
          to the Terms, please do not access/use the Site or download any
          materials from it. The access to this Site is at the sole discretion
          of the Company. Certain parts of this Site are accessible without the
          need for registration. You will be prompted to register when you
          attempt to access parts of the Site which require prior registration.
        </p>
        <h4 className="text-2xl font-bold uppercase">INTELLECTUAL PROPERTY</h4>

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

export default Terms;
