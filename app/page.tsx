import MDV from "@/src/components/ui/mdv";

const text = "The quick brown fox jumps over the lazy dog";

export default function Page() {
  return (
    <div className="flex size-full">
      {/* <div className="p-4">
        <MDV.SideBar />
      </div>
      <div>
        <MDV.Button />
      </div> */}
      <div className="flex flex-col">
        <MDV.Typography.Display size="large">{text}</MDV.Typography.Display>
        <MDV.Typography.Display size="medium">{text}</MDV.Typography.Display>

        <MDV.Typography.Heading size="heading-1">{text}</MDV.Typography.Heading>
        <MDV.Typography.Heading size="heading-2">{text}</MDV.Typography.Heading>
        <MDV.Typography.Heading size="heading-3">{text}</MDV.Typography.Heading>
        <MDV.Typography.Heading size="heading-4">{text}</MDV.Typography.Heading>

        <MDV.Typography.Body size="large" bold="bold">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="medium" bold="bold">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="small" bold="bold">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="large" bold="semibold">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="medium" bold="semibold">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="small" bold="semibold">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="large" bold="medium">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="medium" bold="medium">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="small" bold="medium">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="large" bold="regular">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="medium" bold="regular">
          {text}
        </MDV.Typography.Body>
        <MDV.Typography.Body size="small" bold="regular">
          {text}
        </MDV.Typography.Body>

        <MDV.Typography.Caption overline>{text}</MDV.Typography.Caption>
        <MDV.Typography.Caption>{text}</MDV.Typography.Caption>
      </div>
    </div>
  );
}
