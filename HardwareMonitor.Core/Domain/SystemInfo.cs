﻿using System.Collections.Generic;

namespace HardwareMonitor.Core.Domain
{
    public class SystemInfo
    {
        public int Id { get; set; }
        public bool IsAuthorised { get; set; }
        public string SystemMacs { get; set; }
        public string SystemName { get; set; }

        public ICollection<Usage> Usages { get; set; }
        public ICollection<SystemSpecs> SystemsSpecs { get; set; }
    }
}