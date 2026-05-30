import MDV from "@/src/components/mdv";

const TEXT = "The quick brown fox jumps over the lazy dog";
const BUTTON_TEXT = "Button";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex size-full">
        <div className="flex flex-col p-4">
          <MDV.Typography.Display size="large">{TEXT}</MDV.Typography.Display>
          <MDV.Typography.Display size="medium">{TEXT}</MDV.Typography.Display>

          <MDV.Typography.Heading size="heading-1">
            {TEXT}
          </MDV.Typography.Heading>
          <MDV.Typography.Heading size="heading-2">
            {TEXT}
          </MDV.Typography.Heading>
          <MDV.Typography.Heading size="heading-3">
            {TEXT}
          </MDV.Typography.Heading>
          <MDV.Typography.Heading size="heading-4">
            {TEXT}
          </MDV.Typography.Heading>

          <MDV.Typography.Body size="large" bold="bold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="medium" bold="bold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="small" bold="bold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="large" bold="semibold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="medium" bold="semibold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="small" bold="semibold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="large" bold="medium">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="medium" bold="medium">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="small" bold="medium">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="large" bold="regular">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="medium" bold="regular">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="small" bold="regular">
            {TEXT}
          </MDV.Typography.Body>

          <MDV.Typography.Caption overline>{TEXT}</MDV.Typography.Caption>
          <MDV.Typography.Caption>{TEXT}</MDV.Typography.Caption>
        </div>
        <div className="flex flex-col p-4">
          <MDV.Button size="large">{BUTTON_TEXT}</MDV.Button>
          <MDV.Button size="medium">{BUTTON_TEXT}</MDV.Button>
          <MDV.Button size="small">{BUTTON_TEXT}</MDV.Button>
        </div>
      </div>
      <div className="flex p-4">
        <MDV.Typography.Body size="small" className="text-mdv-neutral-400">
          I have done only Typography components (Display, Heading, Body and
          Caption). I must do the Button components next.
        </MDV.Typography.Body>
      </div>
    </div>
  );
}
