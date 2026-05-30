import Mdv from "@/src/components/ui/mdv";

const text = "The quick brown fox jumps over the lazy dog";

export default function Page() {
  return (
    <div className="flex size-full">
      {/* <div className="p-4">
        <Mdv.SideBar />
      </div>
      <div>
        <Mdv.Button />
      </div> */}
      <div className="flex flex-col">
        <Mdv.Typography.Display size="large">{text}</Mdv.Typography.Display>
        <Mdv.Typography.Display size="medium">{text}</Mdv.Typography.Display>

        <Mdv.Typography.Heading size="heading-1">{text}</Mdv.Typography.Heading>
        <Mdv.Typography.Heading size="heading-2">{text}</Mdv.Typography.Heading>
        <Mdv.Typography.Heading size="heading-3">{text}</Mdv.Typography.Heading>
        <Mdv.Typography.Heading size="heading-4">{text}</Mdv.Typography.Heading>

        <Mdv.Typography.Body size="large" bold="bold">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="medium" bold="bold">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="small" bold="bold">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="large" bold="semibold">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="medium" bold="semibold">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="small" bold="semibold">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="large" bold="meduim">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="medium" bold="meduim">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="small" bold="meduim">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="large" bold="regular">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="medium" bold="regular">
          {text}
        </Mdv.Typography.Body>
        <Mdv.Typography.Body size="small" bold="regular">
          {text}
        </Mdv.Typography.Body>

        <Mdv.Typography.Caption overline>{text}</Mdv.Typography.Caption>
        <Mdv.Typography.Caption>{text}</Mdv.Typography.Caption>
      </div>
    </div>
  );
}
