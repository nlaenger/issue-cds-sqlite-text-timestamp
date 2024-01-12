import cds from "@sap/cds";
const LOG = cds.log("server|dscgmbh");

cds.on("serving", async () => {
  const cdsService = await cds.connect.to("main_service");

  const { Belege } = cdsService.entities;

  LOG._info && LOG.info("Running simple INSERT:");
  await INSERT.into(Belege).entries([{ descr: "I'm a new working entry" }]);

  LOG._info && LOG.info("This will work:");
  await INSERT.into(Belege).entries([
    { descr: 'Timestamp in JS looks like "2025-04-01T15:00:00Z"' },
  ]);

  LOG._info && LOG.info("This will break:");
  await UPDATE.entity(Belege)
    .with({
      descr: 'Timestamp in JS looks like "2025-04-01T15:00:00Z"',
    })
    .where({ ID: "0f3966ef-142c-4d72-9694-c0f06e898d98" });
});

export default cds.server;
